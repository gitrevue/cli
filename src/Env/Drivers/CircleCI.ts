import Driver from "../Driver";

class CircleCI extends Driver {
  static validate(): boolean {
    return Boolean(process.env.CIRCLECI);
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

  pullRequest(): number | null {
    if (!process.env.CIRCLE_PULL_REQUEST) return null;

    return parseInt(process.env.CIRCLE_PULL_REQUEST.split("/").pop(), 10);
  }
}

export default CircleCI;
