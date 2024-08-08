/* eslint-disable react/prop-types */
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

export const UserIn = ({ name, email }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { setUser, setToken } = useContext(UserContext);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  const handleProfile = () => {
    handleCloseUserMenu();
    if (user.roles == "ADMIN") {
      navigate("/adminProviders");
    } else {
      navigate("/profile");
    }
  };

  const getInitials = (name) => {
    const nameArray = name.split(" ");
    const initials = nameArray.map((name) => name[0]).join("");
    return initials;
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            sx={{ backgroundColor: "customColors.negro", color: "customColors.blanco", fontWeight: 700 }}
            alt="Iniciales nombre"
          >
            {getInitials(name || "Anonymous")}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          sx={{
            width: "184px",
            height: "95px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center", alignItems: "center" }}>
            <AccountCircleOutlinedIcon fontSize="large" />
            <Typography sx={{ fontWeight: 600 }} textAlign="center">
              {name}
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: 0, fontWeight: 400, fontSize: "14px" }} variant="subtitle2" textAlign="center">
            {email}
          </Typography>
          <Typography
            onClick={handleProfile}
            sx={{ marginLeft: 0, marginTop: 2, color: "customColors.violeta", fontWeight: 700 }}
            textAlign="center"
          >
            Mi Perfil
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ width: "84px", height: "25px" }}>
          <Typography
            onClick={handleCloseUserMenu}
            sx={{ marginLeft: 0, fontWeight: 500, fontSize: "14px" }}
            textAlign="center"
          >
            Cerrar Sesion
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
