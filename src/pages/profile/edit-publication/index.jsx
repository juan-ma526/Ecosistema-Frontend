/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import EditTitle from "./components/EditTitle";
import EditSubtitle from "./components/EditSubtitle";
import "./edit.css";
import ButtonCharge from "../components/ButtonCharge";
import StandardImageList from "./components/ImageList";
import ErrorAlert from "../../../modals/ErrorAlert";
import SuccessAlert from "../../../modals/SuccessAlert";
import axios from "axios";
import { UserContext } from "../../../context/userContext";
import { useNavigate, useParams } from "react-router-dom";
import { validateEmail, validatePhone } from "./utils/utils";
import Form2 from "./components/Form2";

export default function EditPublication(props) {
  const { user } = useContext(UserContext);
  const token = user?.token || JSON.parse(localStorage.getItem("token"));
  const usuarioId = user?.usuarioId || "defaultId";
  let { proveedorId } = useParams();
  if (!proveedorId) {
    proveedorId = props.provider.id;
  }
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
    imagenes: [],
  });

  const [categorias, setCategorias] = useState([]);
  const [paises, setPaises] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [selectedPaisId, setSelectedPaisId] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  let imagesChanges = [];
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

        setValues({
          usuarioId: response.data.usuario.id || "",
          proveedorId: response.data.id || "",
          nombre: response.data.nombre || "",
          tipoProveedor: response.data.tipoProveedor || "",
          categoriaId: response.data.categoria.id || "",
          email: response.data.email || "",
          telefono: response.data.telefono || "",
          facebook: response.data.facebook || "",
          instagram: response.data.instagram || "",
          paisId: response.data.pais.id || [],
          provinciaId: response.data.provincia.id || [],
          ciudad: response.data.ciudad || [],
          descripcion: response.data.descripcion || "",
          imagenes: response.data.imagenes || [],
        });
        setSelectedPaisId(response.data.paisId?.id || null); // Actualizar el país seleccionado
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
    setValues((prevValues) => ({ ...prevValues, paisId: selectedId }));
  };

  const handleProvinciaChange = (event) => {
    const selectedId = event.target.value;
    setValues((prevValues) => ({ ...prevValues, provinciaId: selectedId }));
  };

  const handleSubmit = () => {
    let newErrors = {};
    const { nombre, email, telefono } = values;

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

  // EVENTO QUE PERMITE LEER LAS IMAGENES ENVIADAS AL HIJO (GETTER):
  const getImagePendingChanges = () => {
    return imagesChanges;
  };

  // EVENTO QUE LE MANDA AL HIJO, CUANDO TIENE QUE ENVIAR LOS DATOS (SETTER):
  const setImagePendingChanges = (imagePendingChanges) => {
    imagesChanges = imagePendingChanges;
    console.log(imagesChanges);
  };

  const handleButtonCharge = async () => {
    const isFormValid = handleSubmit();

    if (isFormValid) {
      setLoading(true);
      try {
        for (const change of imagesChanges) {
          if (change.type === "edit") {
            await axios.put(`http://localhost:8080/actualizar/${change.id}`, change.data, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            });
          } else if (change.type === "delete") {
            await axios.delete(`http://localhost:8080/eliminarImagen/${change.id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
          }
        }

        // Update the form with the final data
        await editForm(values);
        setAlertType("success");
        imagesChanges = [];
      } catch (error) {
        console.error("Error processing changes:", error);
        setAlertType("error");
      } finally {
        setLoading(false);
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
    } = formData;

    const dataToEdit = new FormData();
    dataToEdit.append("usuarioId", usuarioId);
    dataToEdit.append("proveedorId", proveedorId);
    dataToEdit.append("nombre", nombre);
    dataToEdit.append("descripcion", descripcion);
    dataToEdit.append("tipoProveedor", tipoProveedor);
    dataToEdit.append("telefono", telefono);
    dataToEdit.append("email", email);
    dataToEdit.append("facebook", facebook);
    dataToEdit.append("instagram", instagram);
    dataToEdit.append("ciudad", ciudad);
    dataToEdit.append("paisId", paisId);
    dataToEdit.append("provinciaId", provinciaId);
    dataToEdit.append("categoriaId", categoriaId);

    imagesChanges.forEach((imagen, index) => {
      if (imagen.data && imagen.type === "edit") {
        dataToEdit.append(`imagenes[${index}]`, imagen.data);
      }
    });

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

  const navigate = useNavigate();

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertType(null);
    if (alertType === "success") {
      navigate("/profile"); // Redirigir al perfil en caso de éxito
    }
  };

  return (
    <Box>
      {user.roles !== "ADMIN" && (
        <section className="titles">
          <EditTitle />
          <EditSubtitle />
        </section>
      )}
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
        readOnlyForm={user.roles === "ADMIN"}
        rol={user.roles}
      />
      <StandardImageList
        images={values.imagenes || []}
        onImageListChange={setImagePendingChanges}
        getImagePendingChanges={getImagePendingChanges}
      />
      {user.roles !== "ADMIN" && (
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
      )}
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "#4E169D" }} />
            <Typography
              variant="h6"
              sx={{
                color: "#ffffff", // Texto blanco
                marginTop: "16px",
              }}
            >
              Enviando el formulario...
            </Typography>
          </Box>
        </Box>
      )}
      {showAlert && alertType === "error" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} type="edit" />}
      {showAlert && alertType === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} type="edit" />}
    </Box>
  );
}
