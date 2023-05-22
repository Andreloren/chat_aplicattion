import { BrowserRouter, Route, Routes } from "react-router-dom";

const PagesRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/registration"></Route>
        <Route path="/home"></Route>
        <Route path="*" element={<h1>ERRO 404 PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
