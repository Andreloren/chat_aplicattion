import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./modules/rootReducer";

const myStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;

export { myStore };
