import React, {  }  from "react"
import Noti from "../utils/noti";
import { useSnackbar } from 'notistack';

function NotiWrapper({ children }) {
  const enqueueSnackbar = useSnackbar()
  Noti.enqueueSnackbar = enqueueSnackbar

  return (
    <>
      {children}
    </>
  )
}

export default NotiWrapper;
