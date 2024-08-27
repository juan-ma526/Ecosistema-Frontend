/* eslint-disable react/prop-types */
import { TextField, MenuItem } from "@mui/material";

export const CustomSelectField = ({ options = [], error, helperText, value, ...props }) => (
  <TextField
    {...props}
    select
    InputLabelProps={{
      shrink: true,
    }}
    error={error}
    helperText={helperText}
    sx={{ paddingX: "10px", marginBottom: "20px" }}
    value={value}
    SelectProps={{
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: 400,
            width: 250,
          },
        },
      },
    }}
  >
    {options.length > 0 ? (
      options.map((option, index) => (
        <MenuItem key={`${option.id}-${index}`} value={option.id}>
          {option.nombre}
        </MenuItem>
      ))
    ) : (
      <MenuItem disabled>No hay opciones</MenuItem>
    )}
  </TextField>
);