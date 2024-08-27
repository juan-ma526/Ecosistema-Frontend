import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const InvitationRedImpacto = () => {
  return (
    <Box sx={{ marginTop: 8, backgroundColor: "customColors.blanco" }}>
      <Typography sx={{ fontSize: "24px", fontWeight: 400, textAlign: "center" }}>
        ¿Querés formar parte de la Red de impacto ECO como Proveedor?
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Link to="/auth/register">
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
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>Registrate</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
