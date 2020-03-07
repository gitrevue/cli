import Driver from "../Driver";

class TravisCI extends Driver {
  static validate(): boolean {
    return Boolean(process.env.TRAVIS);
  }

  owner(): string {
    return process.env.TRAVIS_REPO_SLUG.split("/").shift();
  }

  repository(): string {
    return process.env.TRAVID_REPO_SLUG.split("/").pop();
  }

  commit(): string {
    return process.env.TRAVIS_COMMIT;
  }

  pullRequest(): number | null {
    if (!process.env.TRAVIS_PULL_REQUEST) return null;

    return parseInt(process.env.TRAVIS_PULL_REQUEST, 10);
  }
}

export default TravisCI;
