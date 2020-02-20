import Driver from '../Driver'

class Default extends Driver {

    static validate(): boolean {
        if (process.env.GITREVUE_OWNER && process.env.GITREVUE_REPOSITORY && process.env.GITREVUE_COMMIT) {
            return true
        }

        return false
    }

    owner(): string {
        return process.env.GITREVUE_OWNER;
    }

    repository(): string {
        return process.env.GITREVUE_REPOSITORY;
    }

    commit(): string {
        return process.env.GITREVUE_COMMIT;
    }

}

export default Default
