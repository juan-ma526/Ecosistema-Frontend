/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import ProfileName from "./components/ProfileName";
import ButtonCharge from "./components/ButtonCharge";
import ProductsTitle from "./components/ProductsTitle";
import ProductCard from "./components/ProductCard";
import { Box } from "@mui/material";
import ProductSubtitle from "./components/ProductSubtitle";
import { useState, useEffect } from "react";
import lavanda1 from "../providers/images/lavanda1.png";
import lavanda2 from "../providers/images/lavanda2.png";
import lavanda3 from "../providers/images/lavanda3.png";
import CardProvider from "../providers/components/CardProviders/CardProviders";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const resp = [
  {
    category: "Bienestar",
    image: [lavanda1, lavanda2, lavanda3],
    nameProvider: "Lavanda",
    typeProvider: "Cosmetica Natural",
    ciudad: "Godoy Cruz",
    provincia: "Mendoza",
    pais: "Argentina",
    description: `Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral 
                        y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden 
                        al planeta, con principios activos que dejen el pelo sano y la piel bella.`,
    linkFacebook: "www.facebook.com/lavanda",
    linkInstagram: "www.instagram.com/lavanda",
    linkMail: "lavanda@mendoza.com",
    linkWhatsapp: "apiwhatsapp.com/",
  },
];

const itemPublication = [
  {
    title: "Lavanda",
    state: "Postulado",
    firstParagraph: "Gracias por querer formar parte de EcoSistema!",
    paragraphs: ["La postulación de tu Producto/Servicio fue enviada correctamente."],
    footer: "Pronto tendrás más novedades.",
  },
  {
    title: "Rosa",
    state: "Aprobado",
    firstParagraph: "¡Felicitaciones!\nSos parte de EcoSistema",
    paragraphs: ["Tu Producto/Servicios está incluído dentro de nuestra Red de Impacto."],
  },
  {
    title: "Orquídea",
    state: "En revisión",
    firstParagraph: "Devolución de la administración:",
    paragraphs: [
      "Worem ipsum dolor sit amet, consectetur adipiscing elit Worem ipsum dolor sit amet, consectetur adipiscing elit. Worem ipsum dolor sit amet, consectetur adipiscing elit Worem ipsum dolor sit amet, consectetur adipiscing elit. olor sit amet, consectetur adipiscing elitr sit amet, consectetur adipis",
    ],
  },
  {
    title: "Girasol",
    state: "Denegado",
    firstParagraph: "Devolución de la administración:",
    paragraphs: [
      "Worem ipsum dolor sit amet, consectetur adipiscing elit Worem ipsum dolor sit amet, consectetur adipiscing elit. Worem ipsum dolor sit amet, consectetur adipiscing elit Worem ipsum dolor sit amet, consectetur adipiscing elit. olor sit amet, consectetur adipiscing elitr sit amet, consectetur adipis",
    ],
  },
];

export default function ProfilePage() {
  const [data, SetData] = useState([]);

  const navigate = useNavigate();

  const handleLoadPage = () => {
    navigate("/profile/load")
  }

  useEffect(() => {
    const cargarDatos = () => {
      try {
        // const response = await fetch("http://localhost:3000/productos");
        // const resp = await response.json();
        SetData(resp);
      } catch (error) {
        console.log(error);
      }
    };
    cargarDatos();
  }, []);

  return (
    <Box>
      <section className="title-button">
        <ProfileName />
        <ButtonCharge sx={{ top: "-140px" }} alwaysPurple onClick={handleLoadPage} />
      </section>
      <ProductsTitle />

      {itemPublication.map((item, index) => (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <ProductCard
              key={index}
              title={item.title}
              state={item.state}
              firstParagraph={item.firstParagraph}
              paragraphs={item.paragraphs}
              footer={item.footer}
            />
          </Box>

          {item.state !== "Denegado" && <ProductSubtitle state={item.state} />}

          {item.state !== "Denegado" && (
            <Box
              sx={{
                height: "100%",
                width: "100%",
                borderTopRightRadius: "100%",
                marginTop: "0px",
                padding: "0px 15px",
              }}
            >
              {data.map((elem, i) => {
                return (
                  <CardProvider
                    category={elem.category}
                    image={elem.image}
                    nameProvider={elem.nameProvider}
                    typeProvider={elem.typeProvider}
                    ciudad={elem.ciudad}
                    provincia={elem.provincia}
                    pais={elem.pais}
                    description={elem.description}
                    key={i}
                  />
                );
              })}
            </Box>
          )}
        </>
      ))}
    </Box>
  );
}
//<Paper sx={{ width: "328px", height: "30px", top: "96px", left: "16px" }}>
