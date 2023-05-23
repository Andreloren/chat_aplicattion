import { combineReducers } from "redux";
import user from "./users/usersSlice";

const rootReducer = combineReducers({
  user,
});

export type State = ReturnType<typeof combineReducers>;

export default rootReducer;
