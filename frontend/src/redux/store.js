import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as NewsReducer } from "./All_News/reducer";
import { LoginReducer } from "./LoginReducer/LoginReducer";

const mainReducer = combineReducers({
 NewsReducer,
 LoginReducer
});

export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));