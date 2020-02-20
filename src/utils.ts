import fs from 'fs'
import glob from 'glob'

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
