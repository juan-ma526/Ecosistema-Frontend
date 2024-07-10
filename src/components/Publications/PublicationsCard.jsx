/* eslint-disable react/prop-types */
import "./PublicationsCard.css";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Carrousel from "./components/Carrousel";

const ExpandMore = styled((props) => {
  /* eslint-disable-next-line no-unused-vars */
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const PublicationsCard = ({ title, images, date, firstParagraph, paragraphs }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    /* Container Card */

    <Card
      sx={{
        width: "328px",
        margin: "auto",
        backgroundColor: "customColors.grisClaro",
        borderRadius: "16px",
      }}
    >
      {/* Title */}

      <CardHeader title={title} sx={{ textAlign: "center", fontSize: "18px", fontWeight: 600 }} />

      {/* Container Carrousel */}

      <Box sx={{ width: "304px", height: "114px", margin: "auto" }}>
        <Carrousel images={images} />
      </Box>

      {/* Container not expanded */}

      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body2" sx={{ fontSize: "16px" }}>
          {date}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "16px" }}>
          {firstParagraph}
        </Typography>
      </CardContent>

      {/* Expand buttom logic */}

      {!expanded && (
        <CardActions disableSpacing sx={{ display: "flex", justifyContent: "center" }}>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <Typography sx={{ fontWeight: 500, color: "customColors.violeta" }}>Ver más</Typography>
          </ExpandMore>
        </CardActions>
      )}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* Content expand */}

        <CardContent>
          {paragraphs.map((item, index) => (
            <Typography key={index} paragraph sx={{ fontSize: "16px" }}>
              {item}
            </Typography>
          ))}
        </CardContent>

        {/* Buttom card expanded */}

        <CardActions disableSpacing sx={{ display: "flex", justifyContent: "center" }}>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <Typography sx={{ fontWeight: 500, color: "customColors.violeta" }}>{expanded && "Ver menos"}</Typography>
          </ExpandMore>
        </CardActions>
      </Collapse>
    </Card>
  );
};
