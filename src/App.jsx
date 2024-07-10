//import { Typography } from '@mui/material'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Providers from './pages/providers/Providers';


function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/providers/providers" element={<Providers />} />
      </Routes>
    </>
  );
}

export default App
