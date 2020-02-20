import Driver from '../Driver'

class GitHub extends Driver {

    static validate(): boolean {
        return Boolean(process.env.GITHUB_ACTIONS)
    }

    owner(): string {
        return process.env.GITHUB_REPOSITORY.split('/').shift()
    }

    repository(): string {
        return process.env.GITHUB_REPOSITORY.split('/').pop()
    }

    commit(): string {
        return process.env.GITHUB_SHA;
    }

}

export default GitHub
