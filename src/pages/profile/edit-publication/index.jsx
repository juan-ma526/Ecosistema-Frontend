// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import EditTitle from "./components/EditTitle";
import EditSubtitle from "./components/EditSubtitle";
import "./edit.css";
//import Form from "./components/Form";
import ButtonCharge from "../components/ButtonCharge";
import StandardImageList from "./components/ImageList";
import ErrorAlert from "../../../modals/ErrorAlert";
import SuccessAlert from "../../../modals/SuccessAlert";
import axios from "axios";
import { UserContext } from "../../../context/userContext";
import { useParams } from "react-router-dom";
import { validateEmail, validatePhone } from "./utils/utils";
import Form2 from "./components/Form2";

export default function EditPublication() {
  const { user } = useContext(UserContext);
  const token = user?.token || JSON.parse(localStorage.getItem("token"));
  const usuarioId = user?.usuarioId || "defaultId";
  const { proveedorId } = useParams();

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [values, setValues] = useState({
    nombre: "",
    tipoProveedor: "",
    categoriaId: "",
    email: "",
    telefono: "",
    facebook: "",
    instagram: "",
    paisId: null,
    provinciaId: null,
    ciudadId: null,
    descripcion: "",
    images: [],
  });
  const [categorias, setCategorias] = useState([]);
  const [paises, setPaises] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [selectedPaisId, setSelectedPaisId] = useState(null);
  const [errors, setErrors] = useState({});

  const urlCategorias = "http://localhost:8080/categorias";
  const urlPaises = "http://localhost:8080/ubicacion/paises";

  useEffect(() => {
    const obtenerSelects = async () => {
      try {
        const categoriasResponse = await axios.get(urlCategorias);
        const paisesResponse = await axios.get(urlPaises);

        setCategorias(categoriasResponse.data);
        setPaises(paisesResponse.data);

        // Seleccionar un país por defecto
        const defaultPaisId = paisesResponse.data[0]?.id || null;
        setSelectedPaisId(defaultPaisId);
      } catch (error) {
        console.error("Error al obtener categorías o países:", error);
      }
    };

    obtenerSelects();
  }, []);

  useEffect(() => {
    const obtenerProvincias = async () => {
      if (selectedPaisId) {
        try {
          const provinciasResponse = await axios.get(
            `http://localhost:8080/ubicacion/paises/${selectedPaisId}/provincias`
          );
          setProvincias(provinciasResponse.data);
        } catch (error) {
          console.error("Error al obtener provincias:", error);
        }
      } else {
        setProvincias([]);
      }
    };

    obtenerProvincias();
  }, [selectedPaisId]);

  useEffect(() => {
    const fetchProviderData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/buscarPorId/${proveedorId}`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        setValues({
          usuarioId: usuarioId || "",
          proveedorId: proveedorId || "",
          nombre: data.nombre || "",
          tipoProveedor: data.tipoProveedor || "",
          categoriaId: data.categoria.id || "",
          email: data.email || "",
          telefono: data.telefono || "",
          facebook: data.facebook || "",
          instagram: data.instagram || "",
          paisId: data.pais.id || [],
          provinciaId: data.provincia.id || [],
          ciudad: data.ciudad || [],
          descripcion: data.descripcion || "",
          imagenes: data.imagenes || [],
        });
        setSelectedPaisId(data.paisId?.id || null); // Actualizar el país seleccionado
      } catch (error) {
        console.error("Error al obtener los datos del proveedor:", error);
      }
    };

    if (token && proveedorId) {
      fetchProviderData();
    }
  }, [token, proveedorId]);

  const handlePaisChange = (event) => {
    const selectedId = event.target.value;
    setSelectedPaisId(selectedId);
    setValues({ ...values, paisId: selectedId });
  };

  const handleProvinciaChange = (event) => {
    const selectedId = event.target.value;
    setValues({ ...values, provinciaId: selectedId });
  };

  const handleSubmit = () => {
    let newErrors = {};
    const { nombre, email, telefono } = values;

    // Limpiar errores previos
    setErrors({});

    if (!nombre) {
      newErrors.nombre = "Este campo es obligatorio";
    }
    if (email && !validateEmail(email)) {
      newErrors.email = "Ingrese un correo válido";
    }
    if (telefono && !validatePhone(telefono)) {
      newErrors.telefono = "Ingrese un teléfono válido";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleButtonCharge = async () => {
    const isFormValid = handleSubmit();
  
    if (isFormValid) {
      try {
        const updatedData = await editForm(values);
        setValues((prevValues) => ({
          ...prevValues,
          ...updatedData, // Actualiza los valores con la respuesta del backend
        }));
        setAlertType("success");
      } catch (error) {
        setAlertType("error");
      }
    } else {
      setAlertType("error");
    }
    setShowAlert(true);
  };

  const editForm = async (formData) => {
    const {
      nombre,
      tipoProveedor,
      categoriaId,
      email,
      telefono,
      facebook,
      instagram,
      paisId,
      provinciaId,
      ciudad,
      descripcion,
      imagenes,
    } = formData;

    const dataToEdit = {
      usuarioId,
      proveedorId,
      nombre,
      descripcion,
      tipoProveedor,
      telefono,
      email,
      facebook,
      instagram,
      ciudad,
      paisId,
      provinciaId,
      categoriaId,
      imagenes,
    };

    console.log("dataToEdit: ", dataToEdit);
    try {
      const response = await axios.put(
        `http://localhost:8080/editarProveedor/usuario/${usuarioId}/proveedor/${proveedorId}`,
        dataToEdit,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      throw error;
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertType(null);
  };

  return (
    <Box>
      <section className="titles">
        <EditTitle />
        <EditSubtitle />
      </section>

      <Form2
        initialValues={values}
        setValues={setValues}
        errors={errors}
        setErrors={setErrors}
        categorias={categorias}
        paises={paises}
        provincias={provincias}
        onPaisChange={handlePaisChange}
        onProvinciaChange={handleProvinciaChange}
      />

      {/* <Form
        initialValues={values}
        setValues={setValues}
        errors={errors}
        setErrors={setErrors}
        categorias={categorias}
        paises={paises}
        provincias={provincias}
        onPaisChange={handlePaisChange}
        onProvinciaChange={handleProvinciaChange}
      /> */}
      <StandardImageList images={values.imagenes || []} />
      <ButtonCharge
        sx={{
          marginTop: "40px",
          top: "-25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleButtonCharge}
      />
      {showAlert && alertType === "error" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} type="edit" />}
      {showAlert && alertType === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} type="edit" />}
    </Box>
  );
}
