export default class Noti {
  static enqueueSnackbar = null

  static success = message => {
    return Noti.enqueueSnackbar.enqueueSnackbar(message, { variant: "success" })
  }

  static warning = message => {
    return Noti.enqueueSnackbar.enqueueSnackbar(message, { variant: "warning" })
  }

  static info = message => {
    return Noti.enqueueSnackbar.enqueueSnackbar(message, { variant: "info" })
  }

  static error = message => {
    return Noti.enqueueSnackbar.enqueueSnackbar(message, { variant: "error" })
  }

  static default = message => {
    return Noti.enqueueSnackbar.enqueueSnackbar(message, { variant: "default" })
  }

  static close = snackbar => {
    Noti.enqueueSnackbar.closeSnackbar(snackbar)
  }
}