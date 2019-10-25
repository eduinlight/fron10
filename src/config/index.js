const ENV = process.env.NODE_ENV

const config = {}

config.production = {
}

config.development = {
}

export default class Config {
  static googleApiKey = config[ENV].googleApiKey;
  static apiUrl = config[ENV].apiUrl;

  static notifications = {
    autoHideDuration: 3000,
    transitionDuration: {
      enter: 500,
      exit: 500,
    }
  }
}
