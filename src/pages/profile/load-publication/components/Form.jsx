/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fields } from "../utils/fields";
import { validateEmail, validatePhone } from "../utils/utils";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#222222",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
            fontFamily: "Nunito",
            marginLeft: "8px",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#000",
            },
            "&:hover fieldset": {
              borderColor: "#000",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#4E169D",
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

const CustomTextField = ({ multiline, rows, error, helperText, value, ...props }) => (
  <TextField
    {...props}
    InputLabelProps={{
      shrink: false,
      style: { display: value ? "none" : "block" },
    }}
    multiline={multiline}
    rows={rows}
    error={error}
    helperText={helperText}
    sx={{ paddingX: "10px", marginBottom: "20px" }}
    value={value}
  />
);

const CustomSelectField = ({ options, error, helperText, value, ...props }) => (
  <TextField
    {...props}
    select
    InputLabelProps={{
      shrink: false,
      style: { display: value ? "none" : "block" },
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
    {options.map((option) => (
      <MenuItem key={option.id} value={option.id}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

const Form = ({ values, setValues, errors, setErrors }) => {
  // eslint-disable-next-line no-unused-vars
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (id) => (event) => {
    setValues({ ...values, [id]: event.target.value });
  };

  const handleBlur = (id) => () => {
    let newErrors = { ...errors };

    if (!values[id]) {
      newErrors[id] = "Este campo es obligatorio";
    } else if (id === "Correo" && !validateEmail(values[id])) {
      newErrors[id] = "Ingrese un correo válido";
    } else if (id === "Telefono" && !validatePhone(values[id])) {
      newErrors[id] = "Ingrese un teléfono válido";
    } else {
      delete newErrors[id];
    }
    setErrors(newErrors);
    setFocusedField(null);
  };

  const handleFocus = (id) => () => {
    setFocusedField(id);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingY: "20px" }}>
        {fields.map((field, index) =>
          field.type === "select" ? (
            <CustomSelectField
              key={`${field.id}-${index}`}
              id={field.id}
              label={field.label}
              value={values[field.id]}
              onChange={handleChange(field.id)}
              onBlur={handleBlur(field.id)}
              onFocus={handleFocus(field.id)}
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
              onFocus={handleFocus(field.id)}
              helperText={errors[field.id] || field.helperText}
              error={!!errors[field.id]}
              fullWidth
              multiline={field.id === "Descripcion del producto"}
              rows={field.id === "Descripcion del producto" ? 6 : 1}
            />
          )
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Form;
