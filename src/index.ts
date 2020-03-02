#!/usr/bin/env node
import commander from "commander";
import GitRevue from "@gitrevue/sdk";
// @ts-ignore
import HttpError from "@gitrevue/sdk/dist/HttpError";
import Env from "./Env";
import { resolveGlobs, getSize, getConfig } from "./utils";
const { version, description } = require("../package.json");

const program = new commander.Command();

program.version(version);
program.description(description);

program
  .name("artifacts")
  .arguments("<glob> [globs...]")
  .option(
    "--dry-run",
    "Output artifact information without publishing to the GitRevue api"
  )
  .action((name, globs, program) => {
    const paths = resolveGlobs(globs);
    const artifacts = paths.reduce((artifacts, path: string) => {
      const artifact = {
        path,
        bytes: getSize(path)
      };

      return artifacts.concat(artifact);
    }, []);

    console.table(artifacts);

    if (!program.dryRun) {
      const config = getConfig();
      const env = Env.detect();
      const api = new GitRevue(config);

      api.assets
        .create(`${env.owner}/${env.repository}`, env.commit, artifacts)
        .catch(async err => {
          if (err instanceof HttpError) {
            console.error(await err.body());
          }

          console.error(err);
        });
    }
  });

program.parse(process.argv);
