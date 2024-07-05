/* eslint-disable react/prop-types */

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const ItemList = ({ item, fontWeight, fontSize, fontStyle }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ textAlign: "left" }}>
        <ListItemText
          disableTypography
          primary={item}
          sx={{ fontWeight: fontWeight, fontSize: fontSize, fontStyle: fontStyle }}
        />
      </ListItemButton>
    </ListItem>
  );
};
