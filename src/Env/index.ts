import Driver from "./Driver";
import DefaultDriver from "./Drivers/Default";
import CircleCI from "./Drivers/CircleCI";
import GitHub from "./Drivers/GitHub";
import GitLab from "./Drivers/GitLab";
import TravisCI from "./Drivers/TravisCI";

class Env {
  public static readonly drivers = [
    CircleCI,
    GitHub,
    GitLab,
    TravisCI,

    // Default driver should always be last
    DefaultDriver
  ];

  private readonly driver: Driver;

  constructor(driver: Driver) {
    this.driver = driver;
  }

  static detect(): Env {
    const driver = Env.drivers.find((d: typeof Driver) => {
      return d.validate();
    });

    if (!driver || !process.env.GITREVUE_TOKEN) {
      throw new Error(
        "Unable to automatically detect environment, please specify the following environment variables. [GITREVUE_OWNER, GITREVUE_REPOSITORY, GITREVUE_COMMIT]"
      );
    }

    return new Env(new driver());
  }

  get owner(): string {
    return this.driver.owner();
  }

  get repository(): string {
    return this.driver.repository();
  }

  get commit(): string {
    return this.driver.commit();
  }
}

export default Env;
