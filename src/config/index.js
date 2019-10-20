const ENV = process.env.NODE_ENV

const config = {}

config.production = {
  googleApiKey: ""
}

config.development = {
  googleApiKey: ""
}

export default class Config {
  static googleApiKey = config[ENV].googleApiKey;

}
