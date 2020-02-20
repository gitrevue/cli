import GitRevue, { Config } from '@gitrevue/sdk'

const config: Config = {
  token: process.env.GITREVUE_TOKEN,
  url: (process.env.GITREVUE_URL || 'https://gitrevue.io').replace(/\/+$/gm, ''),
}

if (!config.token) {
  throw new Error('Unable to detect authorization token. Please specify your token using the GITREVUE_TOKEN environment variable. You can create a token at http://gitrevue.test/settings#/api')
}

const api = new GitRevue(config)

export default api
