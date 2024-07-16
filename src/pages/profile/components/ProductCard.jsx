/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from '@mui/icons-material/Circle';

export default function ProductCard({ title, state, firstParagraph, paragraphs, footer }) {
  return (
    /* Container Card */
    <Card
      sx={{
        width: "328px",
        height: "256px",
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
      {/* Title */}

      <CardHeader
        title={title}
        sx={{
          textAlign: "start",
          fontSize: "24px",
          lineHeight: "24px",
          fontWeight: 700,
          backgroundColor: "customColors.violeta",
          color: "#FAFAFA",
          height: "40px",
          display: "flex",
          alignItems: "center", // Centra verticalmente el texto
          justifyContent: "center", // Centra horizontalmente el texto
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
          >
            <Typography sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "20px" }}>Editar</Typography>
            <Box sx={{ ml: "8px", display: "flex", alignItems: "center" }}>
              <ArrowForwardIosIcon fontSize="small" />
            </Box>
          </Button>
        }
      />

      {/* Container not expanded */}

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-end" }}>
        {/* State Box */}
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: "end", gap: "4px"}}>
          <CircleIcon fontSize="small" color="disabled" />
          <Typography sx={{ fontSize: "16px", fontWeight: 400, textAlign: "center" }}>
            {state}
          </Typography>
        </Box>

        {/* First Paragraph */}
        <Typography sx={{ fontWeight: 600, fontSize: "18px", lineHeight: "20px", textAlign: "center" }}>
          {firstParagraph}
        </Typography>

        {/* Additional Paragraphs */}
        <Typography sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px", textAlign: "center" }}>
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
