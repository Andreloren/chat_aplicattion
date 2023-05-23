import { combineReducers } from "redux";
import user from "./users/usersSlice";
import userLogged from "./usersLogged/usersLoggedSlice";

const rootReducer = combineReducers({
  user,
  userLogged,
});

export type State = ReturnType<typeof combineReducers>;

export default rootReducer;
