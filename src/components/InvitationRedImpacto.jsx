import { Box, Button, Typography } from "@mui/material";

export const InvitationRedImpacto = () => {
  return (
    <Box sx={{ marginTop: 8, backgroundColor: "customColors.blanco" }}>
      <Typography sx={{ fontSize: "24px", fontWeight: 400, textAlign: "center" }}>
        ¿Querés formar parte de la Red de impacto ECO como Proveedor?
      </Typography>
      <Button
        sx={{
          textTransform: "none",
          width: "152px",
          height: "40px",
          padding: "10px 16px 10px 16px",
          borderRadius: "100px",
          backgroundColor: "customColors.violeta",
          color: "customColors.blanco",
          marginTop: "18px",
          left: "104px",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>Registrate</Typography>
      </Button>
    </Box>
  );
};
