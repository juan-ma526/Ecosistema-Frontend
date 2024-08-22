/* eslint-disable react/prop-types */
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box } from "@mui/material";
import "./ManageImagen.css";
import { useLocation } from "react-router-dom";

export const ManageImagen = ({ length, editImage, handleImageChange, deleteImage, imagen, index }) => {
  const location = useLocation();
  const isEditPublication = location.pathname === "/admin/editPublication";

  const shouldShowDeleteIcon = () => {
    if (isEditPublication) {
      return length > 1;
    }
    return true;
  };

  return (
    /* Container image */
    <Box sx={{ position: "relative" }}>
      {imagen.url ? (
        <img
          className="uploaded-img"
          src={typeof imagen.url === "string" ? imagen.url : URL.createObjectURL(imagen.url)}
          loading="lazy"
          alt={`Vista previa imagen ${index + 1}`}
        />
      ) : (
        <img
          className="uploaded-img"
          src={typeof imagen === "string" ? imagen : URL.createObjectURL(imagen)}
          loading="lazy"
          alt={`Vista previa imagen ${index + 1}`}
        />
      )}
      {/* Container Icon */}
      <Box className="container-icon">
        {/* Box input and edit icon */}
        <Box sx={{ marginTop: "5px" }}>
          <label htmlFor={`edit-file-${index}`}>
            <EditOutlinedIcon
              onClick={() => editImage(index, imagen)}
              sx={{ color: "white", backgroundColor: "#22222299", borderRadius: "100px", padding: "2px" }}
            />
          </label>
          <input id={`edit-file-${index}`} onChange={handleImageChange} type="file" style={{ display: "none" }} />
        </Box>
        {shouldShowDeleteIcon() && (
          <DeleteOutlinedIcon
            onClick={() => deleteImage(imagen)}
            sx={{ color: "white", backgroundColor: "#22222299", borderRadius: "100px", padding: "2px" }}
          />
        )}
      </Box>
    </Box>
  );
};
