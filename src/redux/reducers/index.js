import { combineReducers } from "redux";

import api from "./api";
import forms from "./forms";

export default combineReducers({
  api,
  forms,
});

