/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

export const Message = ({ sender, text, index, handleOptionClick }) => {
  return (
    <Box
      onClick={() => handleOptionClick(index + 1)}
      sx={{
        display: "flex",
        justifyContent: sender === "usuario 1" ? "flex-start" : "flex-end",
        mb: 1,
      }}
    >
      <Box
        sx={{
          cursor: sender === "usuario 1" ? "pointer" : "none",
          maxWidth: sender === "usuario 1" ? "100%" : "85%",
          padding: "8px 12px",
          borderRadius: "12px",
          textDecoration: sender === "usuario 1" ? "underline" : "none",
          backgroundColor: sender === "usuario 1" ? "customColors.grisMedio" : "customColors.violeta",
          color: sender === "usuario 1" ? "customColors.violeta" : "white",
        }}
      >
        <Typography>{text}</Typography>
      </Box>
    </Box>
  );
};
