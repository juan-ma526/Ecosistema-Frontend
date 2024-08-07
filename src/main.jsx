import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import { UserProvider } from "./context/userContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <UserProvider>
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <App />
          </ThemeProvider>
        </React.StrictMode>
      </UserProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
