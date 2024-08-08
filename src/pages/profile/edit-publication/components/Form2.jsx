/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const CustomSelectField = ({ options = [], error, helperText, value, ...props }) => (
  <TextField
    {...props}
    select
    InputLabelProps={{
      shrink: true,
    }}
    error={error}
    helperText={helperText}
    sx={{ paddingX: "10px", marginBottom: "20px", width: "100%" }}
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
    {options && Array.isArray(options) ? (
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

const Form2 = ({ initialValues, setValues, errors, setErrors, categorias = [], paises = [], provincias = [] }) => {
    const [localValues, setLocalValues] = useState(initialValues || {});

  useEffect(() => {
    setLocalValues(initialValues);
  }, [initialValues]);

  const handleChange = (id) => (event) => {
    const value = event.target.value;
    const updatedValues = { ...localValues, [id]: value };
    setLocalValues(updatedValues);
    setValues(updatedValues); // Actualizamos también el estado principal!!!
  };

  const handleBlur = (id) => () => {
    let newErrors = { ...errors };

    if (!localValues[id]) {
      newErrors[id] = "Este campo es obligatorio";
    } else if (id === "email" && !validateEmail(localValues[id])) {
      newErrors[id] = "Ingrese un correo válido";
    } else if (id === "telefono" && !validatePhone(localValues[id])) {
      newErrors[id] = "Ingrese un teléfono válido";
    } else {
      delete newErrors[id];
    }
    setErrors(newErrors);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingY: "40px" }}>
        <CustomTextField
          label="Nombre"
          value={localValues.nombre || ""}
          onChange={handleChange("nombre")}
          onBlur={handleBlur("nombre")}
          helperText={errors.nombre || ""}
          error={!!errors.nombre}
          fullWidth
        />
        <CustomTextField
          label="Tipo de Proveedor"
          value={localValues.tipoProveedor || ""}
          onChange={handleChange("tipoProveedor")}
          onBlur={handleBlur("tipoProveedor")}
          helperText={errors.tipoProveedor || ""}
          error={!!errors.tipoProveedor}
          fullWidth
        />
        <CustomSelectField
          label="Categoría"
          value={localValues.categoriaId || ""}
          onChange={handleChange("categoriaId")}
          onBlur={handleBlur("categoriaId")}
          helperText={errors.categoriaId || ""}
          error={!!errors.categoriaId}
          options={categorias}
        />
        <CustomSelectField
          label="País"
          value={localValues.paisId || ""}
          onChange={handleChange("paisId")}
          onBlur={handleBlur("paisId")}
          helperText={errors.paisId || ""}
          error={!!errors.paisId}
          options={paises}
        />
        <CustomSelectField
          label="Provincia"
          value={localValues.provinciaId || ""}
          onChange={handleChange("provinciaId")}
          onBlur={handleBlur("provinciaId")}
          helperText={errors.provinciaId || ""}
          error={!!errors.provinciaId}
          options={provincias}
        />
        <CustomTextField
          label="Ciudad"
          value={localValues.ciudad || ""}
          onChange={handleChange("ciudadId")}
          onBlur={handleBlur("ciudadId")}
          helperText={errors.ciudadId || ""}
          error={!!errors.ciudadId}
          fullWidth
        />
        <CustomTextField
          label="Email"
          value={localValues.email || ""}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          helperText={errors.email || ""}
          error={!!errors.email}
          fullWidth
        />
        <CustomTextField
          label="Teléfono"
          value={localValues.telefono || ""}
          onChange={handleChange("telefono")}
          onBlur={handleBlur("telefono")}
          helperText={errors.telefono || ""}
          error={!!errors.telefono}
          fullWidth
        />
        <CustomTextField
          label="Facebook"
          value={localValues.facebook || ""}
          onChange={handleChange("facebook")}
          onBlur={handleBlur("facebook")}
          helperText={errors.facebook || ""}
          error={!!errors.facebook}
          fullWidth
        />
        <CustomTextField
          label="Instagram"
          value={localValues.instagram || ""}
          onChange={handleChange("instagram")}
          onBlur={handleBlur("instagram")}
          helperText={errors.instagram || ""}
          error={!!errors.instagram}
          fullWidth
        />
        <CustomTextField
          label="Descripción"
          multiline
          rows={6}
          value={localValues.descripcion || ""}
          onChange={handleChange("descripcion")}
          onBlur={handleBlur("descripcion")}
          helperText={errors.descripcion || ""}
          error={!!errors.descripcion}
          fullWidth
        />
      </Box>
    </ThemeProvider>
  );
};

export default Form2;
