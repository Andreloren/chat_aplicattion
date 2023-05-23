import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import PagesRoutes from "./routes/PagesRoutes";
import { Provider } from "react-redux";
import { myStore } from "./store";

export const App: React.FC = () => {
  return (
    <Provider store={myStore}>
      <CssBaseline />
      <PagesRoutes />
    </Provider>
  );
};

export default App;
