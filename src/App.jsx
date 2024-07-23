//import { Typography } from '@mui/material'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Providers from "./pages/providers";
import HomePage from "./pages/landing";
import PublicationsPage from "./pages/publications";
import CategoriesPage from "./pages/categories/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/providers/:idcategory" element={<Providers />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
