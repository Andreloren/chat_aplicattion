import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import PagesRoutes from "./routes/PagesRoutes";

export const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <PagesRoutes />
    </div>
  );
};

export default App;
