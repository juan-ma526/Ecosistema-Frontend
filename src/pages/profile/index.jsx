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
import lavanda1 from "../providers/images/lavanda1.png";
import lavanda2 from "../providers/images/lavanda2.png";
import lavanda3 from "../providers/images/lavanda3.png";
import axios from "axios";
import { UserContext } from "../../context/userContext";

const resp = [
  {
    category: "Bienestar",
    image: [lavanda1, lavanda2, lavanda3],
    nameProvider: "Lavanda",
    typeProvider: "Cosmetica Natural",
    ciudad: "Godoy Cruz",
    provincia: "Mendoza",
    pais: "Argentina",
    description:
      "Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al planeta, con principios activos que dejen el pelo sano y la piel bella.",
    linkFacebook: "www.facebook.com/lavanda",
    linkInstagram: "www.instagram.com/lavanda",
    linkMail: "lavanda@mendoza.com",
    linkWhatsapp: "apiwhatsapp.com/",
  },
];

export default function ProfilePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const url = "http://localhost:8080/mostrarTodo";

  const handleLoadPage = () => {
    navigate("/profile/load");
  };

  useEffect(() => {
    const recieveData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al enviar el formulario:", error.response || error);
        setLoading(false);
        throw error;
      }
    };
    recieveData();
  }, []);

  console.log(data);

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
/*         const messages = stateMessages[item.estado] || {};
        const { firstParagraph = "" } = messages;
        const { footer = "" } = messages; */

        return (
          <Box key={index} sx={{ paddingBottom: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ProductCard title={item.nombre} estado={item.estado} />
            </Box>

            {/* {item.estado !== "DENEGADO" && <ProductSubtitle estado={item.estado} />}

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
                {data.map((elem, i) => (
                  <CardProvider
                    category={elem.categoria}
                    nameProvider={elem.nombre}
                    typeProvider={elem.tipoProveedor}
                    ciudad={elem.ciudad}
                    provincia={elem.provincia}
                    pais={elem.pais}
                    description={elem.descripcion}
                    key={i}
                  />
                ))} 
              </Box>
            )}*/}
          </Box>
        );
      })}
    </Box>
  );
}
