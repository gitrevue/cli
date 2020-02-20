import Driver from '../Driver'

class CircleCI extends Driver {

    static validate(): boolean {
        return Boolean(process.env.CIRCLECI)
    }

    owner(): string {
        return process.env.CIRCLE_PROJECT_USERNAME;
    }

    repository(): string {
        return process.env.CIRCLE_PROJECT_REPONAME;
    }

    commit(): string {
        return process.env.CIRCLE_SHA1;
    }

}

export default CircleCI
