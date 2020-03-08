# GitRevue CLI

[![NPM version](https://img.shields.io/npm/v/@gitrevue/cli.svg)](https://www.npmjs.com/package/@gitrevue/cli)
[![NPM downloads](https://img.shields.io/npm/dm/@gitrevue/cli.svg)](https://www.npmjs.com/package/@gitrevue/cli)

[GitRevue](https://gitrevue.io) CLI helps you report your asset information for review.

## Installing

```bash
npm install -g @gitrevue/cli
```

## Usage

You'll need an API key which you can create at [https://app.gitrevue.io/settings#/api](https://app.gitrevue.io/settings#/api). Set the `GITREVUE_TOKEN` environment variable with your new API key.

#### Publishing artifacts

Publishing artifact information to GitRevue for comparison. You may supply as many [globs](<"https://en.wikipedia.org/wiki/Glob_(programming)">) as needed, any type of artifact may be published. You can use the `--dry-run` option to check matches without publishing them to the GitRevue API.

```bash
gitrevue artifacts <glob> [glob]
```

## Developing

To develop `@gitrevue/cli` you'll need node 10+, if you have nvm installed you can run `nvm use` to select the correct node version.

Run `npm run build` to compile the library, then run `npm link`, this will symlink your development version to your global node modules. Now you can run the `gitrevue` command to test any changes you've made. You can also use `npm run build:watch` to watch for file changes and compile automatically.

You may run the test suite using `npm test`. Alternatively you can use `npm run test:watch` to watch for file changes and automatically rerun the test suite.

## Releasing

1. Update version numbers in `CHANGELOG.md` and commit.
1. Run `npm version` to bump the `package.json` version, automatically commit and tag.
1. Next push the commits and tag using `git push && git push --tags`
1. Publish the new version with `npm publish`
1. Update the release on GitHub with the changes from `CHANGELOG.md`

## License

[MIT](https://github.com/gitrevue/sdk-js/blob/master/LICENSE)
