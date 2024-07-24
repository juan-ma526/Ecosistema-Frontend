/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fields } from "../utils/fields";
import { validateEmail, validatePhone } from "../utils/utils";

// Crea un tema personalizado
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#4E169D", // Color violeta para el label
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "24px",
            fontFamily: "Nunito",
            whiteSpace: "nowrap",
          },
          "& .MuiInputLabel-shrink": {
            transform: "translate(22px, -10px) scale(0.89)", // Ajusta para el estado shrinked
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#000", // Color de borde negro
            },
            "&:hover fieldset": {
              borderColor: "#000", // Color de borde negro al hacer hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#4E169D", // Color de borde violeta al estar enfocado
            },
          },
          "& .MuiFormHelperText-root": {
            fontSize: "13px",
            lineHeight: "16px",
            color: "#222222",
          },
        },
      },
    },
  },
});

const CustomTextField = ({ multiline, rows, error, helperText, ...props }) => (
  <TextField
    {...props}
    InputLabelProps={{
      shrink: true, // Fuerza al label a estar en estado shrinked
    }}
    multiline={multiline}
    rows={rows}
    error={error}
    helperText={helperText}
    sx={{ paddingX: "10px", marginBottom: "20px" }}
  />
);

const CustomSelectField = ({ options, error, helperText, ...props }) => (
  <TextField
    {...props}
    select
    InputLabelProps={{
      shrink: true,
    }}
    error={error}
    helperText={helperText}
    sx={{ paddingX: "10px", marginBottom: "20px" }}
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
    {options.map((option) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))}
  </TextField>
);

const Form = ({ values, setValues, errors, setErrors}) => {
  const handleChange = (id) => (event) => {
    setValues({ ...values, [id]: event.target.value });
  };

  const handleBlur = (id) => () => {
    let newErrors = { ...errors };

    if (!values[id]) {
      newErrors[id] = "Este campo es obligatorio";
    }else if (id === "Correo" && !validateEmail(values[id])) {
      newErrors[id] = "Ingrese un correo válido";
    } else if (id === "Telefono" && !validatePhone(values[id])) {
      newErrors[id] = "Ingrese un teléfono válido";
    } else {
      delete newErrors[id];
    }
    setErrors(newErrors);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingY: "40px" }}>
        {fields.map((field) =>
          field.type === "select" ? (
            <CustomSelectField
              key={field.id}
              id={field.id}
              label={field.label}
              value={values[field.id]}
              onChange={handleChange(field.id)}
              onBlur={handleBlur(field.id)}
              helperText={errors[field.id] || field.helperText}
              error={!!errors[field.id]}
              options={field.options}
              fullWidth
            />
          ) : (
            <CustomTextField
              key={field.id}
              id={field.id}
              label={field.label}
              value={values[field.id]}
              onChange={handleChange(field.id)}
              onBlur={handleBlur(field.id)}
              helperText={errors[field.id] || field.helperText}
              error={!!errors[field.id]}
              fullWidth
              multiline={field.id === "Descripcion del producto"} // Hacer multiline solo para el campo específico
              rows={field.id === "Descripcion del producto" ? 6 : 1}
            />
          )
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Form;
