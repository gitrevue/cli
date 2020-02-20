#!/usr/bin/env node
import commander from "commander";
// @ts-ignore
import HttpError from "@gitrevue/sdk/dist/HttpError";
import api from './api';
import Env from './Env';
import { resolveGlobs, getSize } from "./utils";
const { version, description } = require('../package.json')

const program = new commander.Command();

program.version(version);
program.description(description);

program
    .name('assets')
    .arguments('<glob> [globs...]')
    .option('--dry-run', 'Output asset information without publishing to the GitRevue api')
    .action((name, globs, program) => {
        const paths = resolveGlobs(globs)
        const assets = paths.reduce((assets, path: string) => {
            const asset = {
                path,
                bytes: getSize(path),
            }

            return assets.concat(asset)
        }, [])

        console.table(assets)

        if (!program.dryRun) {
            const env = Env.detect()

            api.assets.create(`${env.owner}/${env.repository}`, env.commit, assets)
                .then((response) => {
                    console.log(response)
                })
                .catch(async (err) => {
                    if (err instanceof HttpError) {
                        console.error(await err.body())
                    }

                    console.error(err)
                })
        }
    })

program.parse(process.argv);

