import Driver from "../Driver";

class Default extends Driver {
  static validate(): boolean {
    if (
      process.env.GITREVUE_OWNER &&
      process.env.GITREVUE_REPOSITORY &&
      process.env.GITREVUE_COMMIT
    ) {
      return true;
    }

    return false;
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

  pullRequest(): number | null {
    if (!process.env.GITREVUE_PULL_REQUEST) return null;

    return parseInt(process.env.GITREVUE_PULL_REQUEST, 10);
  }
}

export default Default;
