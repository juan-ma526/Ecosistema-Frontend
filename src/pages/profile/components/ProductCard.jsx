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

export default function ProductCard({ title, state, firstParagraph, paragraphs, footer }) {

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/profile/edit');
  }

  const getColor = (state) => {
    switch (state) {
      case "Postulado":
        return '#505050';
      case "Aprobado":
        return '#1D9129'
      case "En revisión":
        return '#B86B11';
      case "Denegado":
        return '#BC1111';
      default:
        return '#505050';
    }
  };

  const getCardHeight = (state) => {
    return state === 'Denegado' || state === 'En revisión' ? '328px' : '256px';
  };

  const lines = firstParagraph.split("\n");

  const getParagraphStyles = (state) => {
    switch (state) {
      case 'Denegado':
      case 'En revisión':
        return {
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '20px',
          color: '#4E169D',
        };
      default:
        return {
          fontWeight: 600, 
          fontSize: "18px", 
          lineHeight: "20px", 
          textAlign: "center", 
          color: "#4E169D"
        };
    }
  };

  const paragraphStyles = getParagraphStyles(state);

  return (
    /* Card Mis productos */
    <Card
      sx={{
        width: "328px",
        height: getCardHeight(state),
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
            <Typography sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "20px" }}>Editar</Typography>
            <Box sx={{ ml: "8px", display: "flex", alignItems: "center" }}>
              <ArrowForwardIosIcon fontSize="small" />
            </Box>
          </Button>
        }
      />

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-end" }}>
        {/* Estado de postulacion */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", gap: "4px" }}>
          <CircleIcon fontSize="small" sx={{ color: getColor(state) }} />
          <Typography sx={{ fontSize: "16px", fontWeight: 400, textAlign: "center" }}>{state}</Typography>
        </Box>

        {/* Párrafo violeta */}
        {lines.map((lines, index) => (
          <Typography
            key={index}
            sx={{ ...paragraphStyles, textAlign: state === "Denegado" || state === "En revisión" ? 'left' : 'center'}}
          >
            {lines}
          </Typography>
        ))}

        {/* Segundo párrafo */}
        <Typography sx={{ fontWeight: state === "Denegado" || state === "En revisión" ? 400 : 500, fontSize: "16px", lineHeight: "20px", textAlign: state === "Denegado" || state === "En revisión" ? 'left' : 'center' }}>
          {paragraphs}
        </Typography>

        {/* Footer */}
        <Typography sx={{ fontWeight: 300, fontSize: "16px", lineHeight: "20px", textAlign: "center" }}>
          {footer}
        </Typography>
      </CardContent>
    </Card>
  );
}
