/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../../libs/network/axiosClient";
import { UserContext } from "../../../context/userContext";

export default function CardMenu({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { token } = useContext(UserContext);
  const [deleted, setDeleted] = useState(item.deleted);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (item) => {
    navigate("/admin/editPublication", { state: { item } });
    handleClose();
  };

  const handleChangeState = async (idPubli) => {
    try {
      const response = await axiosClient.put(`/cambiar-estado/${idPubli}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setDeleted(!deleted);
      }

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        sx={{
          fontSize: "28px",
          color: "customColors.blanco",
          backgroundColor: `${deleted ? "customColors.rojo" : "customColors.violeta"}`,
          borderRadius: "50px",
          minWidth: "24px",
          height: "34px",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        sx={{ width: "200px", height: "200px" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleEdit(item)}>Editar</MenuItem>
        <MenuItem onClick={() => handleChangeState(item.id)}>{deleted ? "Mostrar" : "Ocultar"}</MenuItem>
      </Menu>
    </div>
  );
}
