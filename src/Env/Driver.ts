export interface Driver {
  /**
   * Get the owner/organisation
   */
  owner(): string;

  /**
   * Get the repository name
   */
  repository(): string;

  /**
   * Get the commit sha
   */
  commit(): string;
}

abstract class AbstractDriver implements Driver {
  /**
   * Validate the driver against the current environment
   */
  static validate(): boolean {
    throw new Error("Driver must implement the static validate() method");
  }

  abstract commit(): string;

  abstract owner(): string;

  abstract repository(): string;

  abstract pullRequest(): number | null;
}

export default AbstractDriver;
