import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "../pages/registration/Registration";

const PagesRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/home"></Route>
        <Route path="*" element={<h1>ERRO 404 PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
