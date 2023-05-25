import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "../pages/registration/Registration";
import { Login } from "../pages/login/Login";
import { Home } from "../pages/home/Home";

const PagesRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<h1>ERRO 404 PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
