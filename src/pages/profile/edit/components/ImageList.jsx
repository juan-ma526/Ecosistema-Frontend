// eslint-disable-next-line no-unused-vars
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, IconButton } from "@mui/material";
import Lavanda1 from "../../../providers/images/lavanda1.png";
import Lavanda2 from "../../../providers/images/lavanda2.png"
import Lavanda3 from "../../../providers/images/lavanda3.png"

export default function StandardImageList() {
  return (
    <ImageList gap={2} sx={{ paddingBottom: "8px", paddingX: "8px", marginTop: "-5px" }} cols={3} rowHeight={80}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ position: "relative" }}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: "4px", width: "118px", height: "90px", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 2,
              right: 4,
              display: "flex",
              flexDirection: "row",
              gap: 0,
            }}
          >
            <IconButton size="small" color="primary">
              <EditOutlinedIcon />
            </IconButton>
            <IconButton size="small" color="error">
              <DeleteOutlinedIcon />
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
