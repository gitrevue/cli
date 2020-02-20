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
  .name("assets")
  .arguments("<glob> [globs...]")
  .option(
    "--dry-run",
    "Output asset information without publishing to the GitRevue api"
  )
  .action((name, globs, program) => {
    const paths = resolveGlobs(globs);
    const assets = paths.reduce((assets, path: string) => {
      const asset = {
        path,
        bytes: getSize(path)
      };

      return assets.concat(asset);
    }, []);

    console.table(assets);

    if (!program.dryRun) {
      const config = getConfig();
      const env = Env.detect();
      const api = new GitRevue(config);

      api.assets
        .create(`${env.owner}/${env.repository}`, env.commit, assets)
        .catch(async err => {
          if (err instanceof HttpError) {
            console.error(await err.body());
          }

          console.error(err);
        });
    }
  });

program.parse(process.argv);
