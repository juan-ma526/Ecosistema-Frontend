/* eslint-disable react/prop-types */
import "./CategoryItem.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CategoryItem = ({ title, image, widthBox, idcategory,fontSizeCategories }) => {
  const route = '/providers/' + idcategory;
  return (
    /* Item container */
    <Box className="item-category-container" sx={{width: widthBox}}>
      {/* Container image and text */}
      <Link className="link-tag-categories" to={route} >   
        <Box className="image-text-container">
          {/* Image container */}
          <Box sx={{ width: "50px", height: "50px" }}>
            <img src={image} alt="Logo item" style={{ objectFit: "contain", height: "100%", width: "100%",
              border: '1px solid', color:'#222222', borderRadius:'75%', padding: '2px'}} />
          </Box>
          {/* Text container */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "90px", height: "29px" }}>
            <Typography sx={{ fontSize: fontSizeCategories, fontWeight: 700, color: 'customColors.negro'}}>{title}</Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
