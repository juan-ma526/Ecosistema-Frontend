/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const fields = [
  {
    id: "Nombre",
    label: "Nombre de la Organización*",
    helperText: "Se visualizará en el título de la publicación",
    type: "text",
    defaultValue: "Lavanda",
  },
  {
    id: "Descripcion",
    label: "Descripción",
    helperText: "Se visualizará en el subtítulo de la publicación 0/50",
    type: "text",
    defaultValue: "Cosmética natural",
  },
  {
    id: "Categoria",
    label: "Categoría*",
    helperText: "Seleccioná la categoría de tu Producto/Servicio",
    type: "select",
    options: [
      "Bienestar",
      "Capacitaciones",
      "Construcción",
      "Cultivos",
      "Gastronomía",
      "Indumentaria",
      "Merchandising",
      "Muebles/Deco",
      "Reciclaje",
      "Tecnología",
      "Transporte",
    ],
    defaultValue: "Bienestar",
  },
  {
    id: "Correo",
    label: "Correo electrónico*",
    helperText: "El mismo con el que te registraste o uno diferente",
    type: "text",
    defaultValue: "lavandacosmetica@gmail.com",
  },
  {
    id: "Telefono",
    label: "Teléfono o Whatsapp*",
    helperText: "Con el siguiente formato +54 9 261 002 002",
    type: "text",
    defaultValue: "+54 9 261 568 258",
  },
  {
    id: "Instagram",
    label: "Instagram*",
    helperText: "Podés pegar el link de tu perfil",
    type: "text",
    defaultValue: "https://www.instagram.com/lavandacosmética/",
  },
  {
    id: "Facebook",
    label: "Facebook*",
    helperText: "Podés pegar el link de tu perfil",
    type: "text",
    defaultValue: "Facebook",
  },
  {
    id: "País",
    label: "País*",
    helperText: "Seleccioná un País de la lista",
    type: "select",
    options: ["Argentina", "Chile", "Colombia", "Uruguay"],
    defaultValue: "Argentina",
  },
  {
    id: "Provincia",
    label: "Provincia/Estado*",
    helperText: "Seleccioná un Provincia/Estado de la lista",
    type: "select",
    options: ["Buenos Aires", "Córdoba", "Mendoza", "San Luis"],
    defaultValue: "Mendoza",
  },
  {
    id: "Ciudad",
    label: "Ciudad*",
    helperText: "Sin abreviaturas, nombre completo",
    type: "text",
    defaultValue: "Godoy Cruz",
  },
  {
    id: "Descripcion del producto",
    label: "Descripción del Producto/Servicio*",
    helperText: "Máximo 300 caracteres 300/300",
    type: "text",
    defaultValue:
      "Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al planeta, con principios activos que dejen el pelo sano y la piel bella.",
  },
];

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

const CustomTextField = ({ multiline, rows, ...props }) => (
  <TextField
    {...props}
    InputLabelProps={{
      shrink: true, // Fuerza al label a estar en estado shrinked
    }}
    multiline={multiline}
    rows={rows}
    sx={{ paddingX: "10px", marginBottom: "20px" }}
  />
);

const CustomSelectField = ({ options, ...props }) => (
  <TextField
    {...props}
    select
    InputLabelProps={{
      shrink: true,
    }}
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

const Form = () => {
  const [values, setValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: field.defaultValue || "" }), {})
  ); // Controla el valor del primer TextField

  const handleChange = (id) => (event) => {
    setValues({ ...values, [id]: event.target.value });
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
              helperText={field.helperText}
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
              helperText={field.helperText}
              fullWidth
              defaultValue={field.defaultValue}
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