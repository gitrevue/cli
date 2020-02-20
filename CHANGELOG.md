# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.1.2](https://github.com/gitrevue/cli/releases/tag/v0.1.2) 2020-02-20

### Fixed

- No longer requires `GITREVUE_TOKEN` to be set when calling commands that don't interact with the api
- Use https://app.gitrevue.io/ as api endpoint
- Suggest correct URL to create an api token
- Capitalization of the GitLab driver so it now works on case-sensitive file systems.

### Changed

- No longer logs the api response when publishing asset information
- Applied TSLint across the code base

## [v0.1.1](https://github.com/gitrevue/cli/releases/tag/v0.1.1) 2020-02-20

### Fixed

- Include `@gitrevue/sdk` as a dependency

## [v0.1.0](https://github.com/gitrevue/cli/releases/tag/v0.1.0) - 2020-02-20

Initial release. Allows you to publish asset information to the GitRevue API.
