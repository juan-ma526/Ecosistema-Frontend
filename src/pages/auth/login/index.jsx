import { Box, Button, Typography } from "@mui/material";
import logo from "../images/logoLogin.png";
import googleIcon from "../images/logoGoogleButtom.png";
import "../Auth.css";

export default function Login() {
  return (
    /* Container gral */
    <Box className="container-gral">
      {/* Container Card */}
      <Box className="container-card">
        {/* First Box */}
        <Box className="first-box">
          {/* Text box */}
          <Box className="text-box" sx={{ width: "277px" }}>
            <Typography sx={{ fontWeight: 700, fontSize: "28px" }}>Inicia Sesión</Typography>
            <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>Seguí disfrutando de ECOSistema</Typography>
          </Box>
          {/* Box img */}
          <Box className="box-img" sx={{ width: "80px", height: "75px" }}>
            <img src={logo} alt="Logo empresa" />
          </Box>
        </Box>
        {/* Second Box*/}
        <Box className="second-box">
          <Typography sx={{ fontWeight: 500 }}>Ingresá con tu cuenta de Gmail</Typography>
          <Button
            variant="contained"
            startIcon={
              <img
                src={googleIcon}
                alt="google icon"
                style={{
                  objectFit: "cover",
                  height: "24px",
                  width: "24px",
                  padding: "2px",
                  backgroundColor: "white",
                  borderRadius: "100px",
                }}
              />
            }
            sx={{
              backgroundColor: "customColors.violeta",
              borderRadius: "100px",
              textTransform: "none",
              width: "200px",
              height: "40px",
              ":active": {
                backgroundColor: "#6E20DB",
              },
              ":hover": {
                backgroundColor: "#6E20DB",
              },
            }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>Continuá con Google</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
