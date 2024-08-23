/* eslint-disable react/prop-types */
import "./PublicationsCard.css";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Carrousel from "./components/Carrousel";
import CardMenu from "../../pages/admin-publications/components/CardMenu";
import { useLocation } from "react-router-dom";
import { axiosClient } from "../../libs/network/axiosClient";
import { UserContext } from "../../context/userContext";

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

export const PublicationsCard = ({ item, title, images, date, firstParagraph, paragraphs }) => {
  const { token } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpdateVisuals = async (idPubli) => {
    try {
      await axiosClient.get(`/incrementarVisualizaciones/${idPubli}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /* Container Card */

    <Card
      sx={{
        width: "328px",
        margin: "auto",
        backgroundColor: "customColors.grisClaro",
        borderRadius: "16px",
        position: "relative",
      }}
    >
      {location.pathname === "/adminPublications" ? (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "22px" }}>
          <Box sx={{ position: "absolute", right: "12px", top: "14px" }}>
            <CardMenu item={item} />
          </Box>

          <CardHeader
            className="publications-title"
            title={title}
            sx={{ textAlign: "center", fontSize: "18px", fontWeight: 600, marginTop: 2 }}
          />
        </Box>
      ) : (
        <CardHeader
          className="publications-title"
          title={title}
          sx={{ textAlign: "center", fontSize: "18px", fontWeight: 600, marginTop: 2 }}
        />
      )}
      {/* Title */}

      {/* Container Carrousel */}

      <Box sx={{ width: "304px", height: "114px", margin: "auto" }}>
        <Carrousel images={images} />
      </Box>

      {/* Container not expanded */}

      <CardContent sx={{ display: "flex", flexDirection: "column", marginTop: 3 }}>
        <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: 600 }}>
          {date}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 400, fontSize: "16px" }}>
          {firstParagraph}
        </Typography>
      </CardContent>

      {/* Expand buttom logic */}

      {!expanded && (
        <CardActions disableSpacing sx={{ display: "flex", justifyContent: "center" }}>
          <ExpandMore
            expand={expanded}
            onClick={(e) => {
              handleExpandClick(e);
              handleUpdateVisuals(item.id);
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
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
