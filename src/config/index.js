const ENV = process.env.NODE_ENV

const config = {}

config.production = {
  googleApiKey: "GV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGilsuYo",
  apiUrl: "http://localhost:1338",
}

config.development = {
  googleApiKey: "GV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGilsuYo",
  apiUrl: "http://localhost:1338",
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
