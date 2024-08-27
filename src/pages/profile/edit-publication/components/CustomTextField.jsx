/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

export const CustomTextField = ({ multiline, value, rows, error, helperText, ...props }) => (
    <TextField
      {...props}
      InputLabelProps={{
        shrink: true, // Fuerza al label a estar en estado shrinked
      }}
      multiline={multiline}
      rows={rows}
      error={error}
      value={value}
      helperText={helperText}
      sx={{ paddingX: "10px", marginBottom: "20px" }}
    />
  );