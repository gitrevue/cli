import Driver from '../Driver'

class GitLab extends Driver {

    static validate(): boolean {
        return Boolean(process.env.GITLAB_CI)
    }

    owner(): string {
        return process.env.CI_PROJECT_NAMESPACE;
    }

    repository(): string {
        return process.env.CI_PROJECT_NAME;
    }

    commit(): string {
        return process.env.CI_COMMIT_SHA;
    }

}
export default GitLab
