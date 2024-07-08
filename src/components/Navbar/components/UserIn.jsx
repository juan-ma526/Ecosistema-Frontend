import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

export const UserIn = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar sx={{ width: "32px", height: "32px" }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            <Typography sx={{ fontWeight: 600 }} textAlign="center">
              Julieta Perez
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: 5, fontWeight: 400, fontSize: "14px" }} variant="subtitle2" textAlign="center">
            JulietaPerez@gmail.com
          </Typography>
          <Typography
            onClick={handleCloseUserMenu}
            sx={{ marginLeft: 5, marginTop: 2, color: "customColors.violeta", fontWeight: 700 }}
            textAlign="center"
          >
            Mi Perfil
          </Typography>
        </MenuItem>
        <MenuItem sx={{ width: "84px", height: "25px" }}>
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
