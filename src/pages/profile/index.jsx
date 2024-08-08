/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import ProfileName from "./components/ProfileName";
import ButtonCharge from "./components/ButtonCharge";
import ProductsTitle from "./components/ProductsTitle";
import ProductCard from "./components/ProductCard";
import { Box } from "@mui/material";
import ProductSubtitle from "./components/ProductSubtitle";
import CardProvider from "../providers/components/CardProviders/CardProviders";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/userContext";

export default function ProfilePage() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const url = "http://localhost:8080/mostrarTodo";

  const handleLoadPage = () => {
    navigate("/profile/load");
  };

  const stateMessages = (estado, feedback) => {
    switch (estado) {
      case "REVISION_INICIAL":
        return {
          firstParagraph: "Gracias por querer formar parte de EcoSistema!",
          paragraph: "La postulación de tu Producto/Servicio fue enviado correctamente.",
          footer: "Pronto tendrás más novedades.",
        };

      case "ACEPTADO":
        return {
          firstParagraph: "¡Felicitaciones! Sos parte de EcoSistema",
          paragraph: "Tu Producto/Servicios está incluído dentro de nuestra Red de Impacto.",
          footer: "",
        };

      case "REQUIERE_CAMBIOS":
      case "DENEGADO":
        return {
          firstParagraph: "Devolución de la administración:",
          paragraph: feedback || "No se proporcionó feedback por parte de la administración.",
          footer: "",
        };

      default:
        return {
          firstParagraph: "",
          footer: "",
        };
    }
  };

  useEffect(() => {
    if (!user) return; // No hacer la llamada si `user` no está disponible
    const recieveData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const filteredData = response.data.filter((item) => item.usuario.id === user?.usuarioId);
        setData(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Error al enviar el formulario:", error.response || error);
        setLoading(false);
        throw error;
      }
    };
    recieveData();
  }, [user]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Loading...</Box>
    );
  }

  return (
    <Box>
      <section className="title-button">
        <ProfileName />
        <ButtonCharge sx={{ top: "-140px" }} alwaysPurple onClick={handleLoadPage} />
      </section>
      <ProductsTitle />

      {data.map((item, index) => {
        const messages = stateMessages(item.estado, item.feedback) || {};
        const { firstParagraph = "" } = messages;
        const { paragraph } = messages;
        const { footer = "" } = messages;

        return (
          <Box key={index} sx={{ paddingBottom: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ProductCard
                title={item.nombre}
                estado={item.estado}
                id={item.id}
                firstParagraph={firstParagraph}
                paragraph={paragraph}
                footer={footer}
              />
            </Box>

            {item.estado !== "DENEGADO" && <ProductSubtitle estado={item.estado} />}

            {item.estado !== "DENEGADO" && (
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  borderTopRightRadius: "100%",
                  marginTop: "0px",
                  padding: "0px 15px",
                  marginBottom: "20px",
                }}
              >
                <CardProvider
                  category={item.categoria}
                  nombre={item.nombre}
                  tipoProveedor={item.tipoProveedor}
                  ciudad={item.ciudad}
                  provincia={item.provincia}
                  pais={item.pais}
                  description={item.descripcion}
                  images={item.imagenes || []}
                  key={`${item.nombre} + ${item.ciudad}`}
                />
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
