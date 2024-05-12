import { createStore } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
import ReducerVoyage from "./reducers";
const store = createStore(ReducerVoyage , applyMiddleware(thunk))
export default store