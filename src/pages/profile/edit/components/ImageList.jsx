// eslint-disable-next-line no-unused-vars
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, IconButton } from "@mui/material";
import Lavanda1 from "../../../providers/images/lavanda1.png";
import Lavanda2 from "../../../providers/images/lavanda2.png";
import Lavanda3 from "../../../providers/images/lavanda3.png";
import "../edit.css";

export default function StandardImageList() {
  return (
    <ImageList
      gap={16}
      sx={{
        marginTop: "-25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      cols={3}
      rowHeight={90}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ position: "relative" }}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: "4px", width: "128px", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "52px",
              height: "24px",
              top: 5,
              right: 9,
              display: "flex",
              flexDirection: "row",
              gap: 1 // Ajusta el espacio entre los botones
            }}
            className="custom-icon"
          >
            <IconButton
              size="small"
              sx={{
                backgroundColor: "#22222299",
                color: "white",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "darkgrey",
                },
              }}
            >
              <EditOutlinedIcon /> {/* Ajusta el tamaño del ícono */}
            </IconButton>
            <IconButton
              size="small"
              sx={{
                backgroundColor: "#22222299",
                color: "white",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "darkgrey",
                },
              }}
            >
              <DeleteOutlinedIcon /> {/* Ajusta el tamaño del ícono */}
            </IconButton>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Lavanda1,
    title: "Breakfast",
  },
  {
    img: Lavanda2,
    title: "Burger",
  },
  {
    img: Lavanda3,
    title: "Camera",
  },
];
