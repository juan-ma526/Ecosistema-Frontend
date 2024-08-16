import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Providers from "./pages/providers";
import HomePage from "./pages/landing";
import PublicationsPage from "./pages/publications";
import ProfilePage from "./pages/profile";
import EditPublication from "./pages/profile/edit-publication";
import LoadPublication from "./pages/profile/load-publication";
import CategoriesPage from "./pages/categories/index";
import AdminProvidersPage from "./pages/admin-providers/index";
import DashboardAdministrador from "./pages/admin-dashboard/index";

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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit/:proveedorId" element={<EditPublication />} />
        <Route path="/profile/load" element={<LoadPublication />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/adminProviders" element={<AdminProvidersPage />} />
        <Route path="/dashboard" element={<DashboardAdministrador />} />
      </Routes>
    </>
  );
}

export default App;
