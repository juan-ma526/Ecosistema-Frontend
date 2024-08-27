import { Box } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export const UserOut = () => {
  return (
    <Box
      sx={{
        color: "customColors.negro",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AccountCircleOutlinedIcon fontSize="medium" />
      <Link style={{ textDecoration: "none", color: "#222222" }} to="/auth/login">
        <span>Ingresá</span>
      </Link>
    </Box>
  );
};
