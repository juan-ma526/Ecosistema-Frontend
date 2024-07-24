//import { Typography } from '@mui/material'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Providers from "./pages/providers";
import HomePage from "./pages/landing";
import PublicationsPage from "./pages/publications";
import ProfilePage from "./pages/profile";
import EditPublication from "./pages/profile/edit-publication";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditPublication />} />
      </Routes>
    </>
  );
}

export default App;
