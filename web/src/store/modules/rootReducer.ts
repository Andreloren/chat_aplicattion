import { combineReducers } from "redux";
import user from "./users/usersSlice";
import userLogged from "./usersLogged/usersLoggedSlice";
import userLocal from "./userLocal/userLocalSlice";

const rootReducer = combineReducers({
  user,
  userLogged,
  userLocal,
});

export type State = ReturnType<typeof combineReducers>;

export default rootReducer;
