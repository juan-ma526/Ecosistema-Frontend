/* eslint-disable react/prop-types */
import "./CategoryItem.css";
import { Box, Typography } from "@mui/material";

export const CategoryItem = ({ title, image, widthBox }) => {
  return (
    /* Item container */
    <Box className="item-category-container" sx={{width: widthBox}}>
      {/* Container image and text */}
      <Box className="image-text-container">
        {/* Image container */}
        <Box sx={{ width: "40px", height: "40px" }}>
          <img src={image} alt="Logo item" style={{ objectFit: "cover", height: "100%", width: "100%",
             border: '1px solid ', borderRadius:'50%', padding: '2px'}} />
        </Box>
        {/* Text container */}
        <Box sx={{ display: "flex", flexDirection: "column", width: "90px", height: "29px" }}>
          <Typography sx={{ fontSize: "15px", fontWeight: 700 }}>{title}</Typography>
          <Box sx={{ width: "100%", height: "1px", backgroundColor: "customColors.violeta" }}></Box>
        </Box>
      </Box>
    </Box>
  );
};
