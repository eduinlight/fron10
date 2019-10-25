const ENV = process.env.NODE_ENV

const config = {}

config.production = {
}

config.development = {
}

export default class Config {
  static googleApiKey = config[ENV].googleApiKey;

}
