/* eslint-disable react/prop-types */
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box } from "@mui/material";
import "./ManageImagen.css";

export const ManageImagen = ({ editImage, handleImageChange, deleteImage, imagen, index }) => {
  return (
    /* Container image */
    <Box sx={{ position: "relative" }}>
      <img
        className="uploaded-img"
        src={typeof imagen === "string" ? imagen : URL.createObjectURL(imagen)}
        loading="lazy"
        alt={`Vista previa imagen ${index + 1}`}
      />
      {/* Container Icon */}
      <Box className="container-icon">
        {/* Box input and edit icon */}
        <Box sx={{ marginTop: "5px" }}>
          <label htmlFor={`edit-file-${index}`}>
            <EditOutlinedIcon
              onClick={() => editImage(index)}
              sx={{ color: "white", backgroundColor: "#22222299", borderRadius: "100px", padding: "2px" }}
            />
          </label>
          <input id={`edit-file-${index}`} onChange={handleImageChange} type="file" style={{ display: "none" }} />
        </Box>

        <DeleteOutlinedIcon
          onClick={() => deleteImage(imagen)}
          sx={{ color: "white", backgroundColor: "#22222299", borderRadius: "100px", padding: "2px" }}
        />
      </Box>
    </Box>
  );
};
