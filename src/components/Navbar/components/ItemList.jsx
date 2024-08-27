/* eslint-disable react/prop-types */

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export const ItemList = ({ item, fontWeight, fontSize, fontStyle, path }) => {
  return (
    <ListItem disablePadding>
      <Link className="link-tag" to={path}>
        <ListItemButton sx={{ textAlign: "left" }}>
          <ListItemText
            disableTypography
            primary={item}
            sx={{ fontWeight: fontWeight, fontSize: fontSize, fontStyle: fontStyle }}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};
