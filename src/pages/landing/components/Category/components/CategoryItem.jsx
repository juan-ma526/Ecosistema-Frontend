/* eslint-disable react/prop-types */
import "./CategoryItem.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CategoryItem = ({ title, image, widthBox, idcategory }) => {
  const route = '/providers/' + idcategory;
  return (
    /* Item container */
    <Box className="item-category-container" sx={{width: widthBox}}>
      {/* Container image and text */}
      <Link to={route} >   
        <Box className="image-text-container">
          {/* Image container */}
          <Box sx={{ width: "40px", height: "40px" }}>
            <img src={image} alt="Logo item" style={{ objectFit: "cover", height: "100%", width: "100%",
              border: '1px solid ', borderRadius:'50%', padding: '2px'}} />
          </Box>
          {/* Text container */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "90px", height: "29px" }}>
            <Typography sx={{ fontSize: "15px", fontWeight: 700 }}>{title}</Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
