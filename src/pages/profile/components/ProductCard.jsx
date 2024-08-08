/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import "../profile.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ title, estado, id, firstParagraph, paragraph, footer }) {
  const navigate = useNavigate();
  // console.log(id, "estado del productCard");

  const handleEditClick = () => {
    navigate(`/profile/edit/${id}`);
  };

  const getColor = (estado) => {
    switch (estado) {
      case "Postulado":
        return "#505050";
      case "Aprobado":
        return "#1D9129";
      case "En revisión":
        return "#B86B11";
      case "Denegado":
        return "#BC1111";
      default:
        return "#505050";
    }
  };

  const getCardHeight = (estado) => {
    return estado === "Denegado" || estado === "En revisión" ? "328px" : "256px";
  };

  const getParagraphStyles = (estado) => {
    switch (estado) {
      case "Denegado":
      case "En revisión":
        return {
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "20px",
          color: "#4E169D",
        };
      default:
        return {
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "20px",
          textAlign: "center",
          color: "#4E169D",
        };
    }
  };

  const paragraphStyles = getParagraphStyles(estado);

  return (
    /* Card Mis productos */
    <Card
      sx={{
        width: "328px",
        height: getCardHeight(estado),
        margin: "auto",
        backgroundColor: "customColors.blanco",
        borderRadius: "16px",
        borderTop: "0px",
        borderRight: "1px solid",
        borderBottom: "1px solid",
        borderLeft: "1px solid",
        borderColor: "customColors.violeta",
        gap: "24px",
        overflow: "hidden",
      }}
    >
      {/* Titulo y botón editar */}

      <CardHeader
        title={title}
        sx={{
          backgroundColor: "customColors.violeta",
          color: "#FAFAFA",
          height: "40px",
          padding: "0",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
        action={
          <Button
            sx={{
              color: "white",
              textTransform: "none",
              width: "80px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              paddingTop: "12px",
            }}
            aria-label="Editar"
            onClick={handleEditClick}
          >
            {estado === "Denegado" ? (
              <></>
            ) : (
              <>
                <Typography sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "20px" }}>Editar</Typography>
                <Box sx={{ ml: "8px", display: "flex", alignItems: "center" }}>
                  <ArrowForwardIosIcon fontSize="small" />
                </Box>
              </>
            )}
          </Button>
        }
      />

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-end" }}>
        {/* Estado de postulacion */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", gap: "4px" }}>
          <CircleIcon fontSize="small" sx={{ color: getColor(estado) }} />
          <Typography sx={{ fontSize: "16px", fontWeight: 400, textAlign: "center" }}>{estado}</Typography>
        </Box>

        {/* Párrafo violeta */}
        <Typography
          sx={{
            ...paragraphStyles,
            textAlign: estado === "Denegado" || estado === "En revisión" ? "left" : "center",
          }}
        >
          {firstParagraph}
        </Typography>

        {/* Segundo párrafo */}
        <Typography
          sx={{
            fontWeight: estado === "Denegado" || estado === "En revisión" ? 400 : 500,
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: estado === "Denegado" || estado === "En revisión" ? "left" : "center",
          }}
        >
          {paragraph}
        </Typography>

        {/* Footer */}
        <Typography sx={{ fontWeight: 300, fontSize: "16px", lineHeight: "20px", textAlign: "center" }}>
          {footer}
        </Typography>
      </CardContent>
    </Card>
  );
}

