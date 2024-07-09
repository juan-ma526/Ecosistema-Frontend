//import { Typography } from '@mui/material'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import HomePage from "./pages/landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
      {/* <Typography variant='h3' sx={{color: 'customColors.violeta' }}>Hola river plate</Typography> */}
    </>
  );
}

export default App;
