import { Box, Typography } from "@mui/material";
import "./ImpactCompanies.css";

function ImpactCompanies() {
  return (
    <>
      <section>
        <Box className="container" sx={{ borderTop: 1, borderBottom: 1, borderColor: "customColors.violeta" }}>
          <Typography
            variant="h1"
            sx={{
              color: "customColors.violeta",
              fontWeight: 700,
              fontSize: 22,
              lineHeight: 1.13,
              marginTop: 1.25,
            }}
          >
            ¿Qué son las empresas de impacto?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "customColors.negro",
              fontSize: 18,
              lineHeight: 1.11,
              marginTop: 1.25,
              paddingLeft: 1.25,
              paddingRight: 1.25,
            }}
          >
            Son organizaciones con un compromiso fundamental con la generación de un impacto positivo en la sociedad y
            el medio ambiente como parte integral de su modelo de negocio.
          </Typography>
        </Box>
      </section>
    </>
  );
}

export default ImpactCompanies;
