# GitRevue CLI

[![NPM version](https://img.shields.io/npm/v/@gitrevue/cli.svg)](https://www.npmjs.com/package/@gitrevue/cli)
[![NPM downloads](https://img.shields.io/npm/dm/@gitrevue/cli.svg)](https://www.npmjs.com/package/@gitrevue/cli)

[GitRevue](https://gitrevue.io) CLI helps you report your asset information for review.

## Installing

```bash
npm install -g @gitrevue/cli
```

## Usage

You'll need an API key which you can create for your organisation

#### Publishing artifacts

Publishing artifact information to GitRevue for tracking. You may supply as many [globs](<"https://en.wikipedia.org/wiki/Glob_(programming)">) as needed, any type of artifact may be published. You can use the `--dry-run` option to check matches without publishing them to the GitRevue API.

```bash
gitrevue artifacts <glob> [glob]
```

## License

[MIT](https://github.com/gitrevue/sdk-js/blob/master/LICENSE)
