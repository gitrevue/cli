import fs from 'fs'
import glob from 'glob'
import { Config } from "@gitrevue/sdk";

export const resolveGlobs = (paths: string[]): string[] => {
    return paths.reduce((files: string[], path: string): string[] => {
        const matches = glob.sync(path)

        return files.concat(matches)
    }, [])
}

export const getSize = (path: string): number => {
    const stats = fs.statSync(path)

    return stats.size
}

export const getConfig = (): Config => {
    const config: Config = {
        token: process.env.GITREVUE_TOKEN,
        url: (process.env.GITREVUE_URL || 'https://app.gitrevue.io').replace(/\/+$/gm, ''),
    }

    if (!config.token) {
        throw new Error('Unable to detect authorization token. Please specify your token using the GITREVUE_TOKEN environment variable. You can create a token at http://gitrevue.test/settings#/api')
    }

    return config
}
