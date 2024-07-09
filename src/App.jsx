//import { Typography } from '@mui/material'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import CardProvider from "./pages/providers/components/CardProviders/CardProviders";


function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/providers/provider" element={<CardProvider />} />
      </Routes>
    </>
  );
}

export default App;
