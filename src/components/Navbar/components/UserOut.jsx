import { Box } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

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
      <span>Ingresá</span>
    </Box>
  );
};
