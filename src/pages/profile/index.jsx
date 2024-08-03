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
import { ProductContext } from "../../context/productContext";  // Asegúrate de usar la ruta correcta
import lavanda1 from "../providers/images/lavanda1.png";
import lavanda2 from "../providers/images/lavanda2.png";
import lavanda3 from "../providers/images/lavanda3.png";

const resp = [
  {
    category: "Bienestar",
    image: [lavanda1, lavanda2, lavanda3],
    nameProvider: "Lavanda",
    typeProvider: "Cosmetica Natural",
    ciudad: "Godoy Cruz",
    provincia: "Mendoza",
    pais: "Argentina",
    description: "Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al planeta, con principios activos que dejen el pelo sano y la piel bella.",
    linkFacebook: "www.facebook.com/lavanda",
    linkInstagram: "www.instagram.com/lavanda",
    linkMail: "lavanda@mendoza.com",
    linkWhatsapp: "apiwhatsapp.com/",
  },
];

const stateMessages = {
  Postulado: {
    firstParagraph: "Gracias por querer formar parte de EcoSistema!",
    footer: "Pronto tendrás más novedades.",
  },
  Aprobado: {
    firstParagraph: "¡Felicitaciones!\nSos parte de EcoSistema",
    footer: "",
  },
  "En revisión": {
    firstParagraph: "Devolución de la administración:",
    footer: "",
  },
  Denegado: {
    firstParagraph: "Devolución de la administración:",
    footer: "",
  },
};

export default function ProfilePage() {
  const { products } = useContext(ProductContext); // Aquí es donde obtienes los productos del contexto
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleLoadPage = () => {
    navigate("/profile/load");
  };

  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <Box>
      <section className="title-button">
        <ProfileName />
        <ButtonCharge sx={{ top: "-140px" }} alwaysPurple onClick={handleLoadPage} />
      </section>
      <ProductsTitle />

      {products.map((item, index) => {
        const { firstParagraph, footer } = stateMessages[item.state] || {};
        return (
          <Box key={index} sx={{ paddingBottom: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ProductCard
                title={item.title}
                state={item.state}
                firstParagraph={firstParagraph}
                paragraphs={item.paragraphs}
                footer={footer}
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
                  marginBottom: "20px",
                }}
              >
                {data.map((elem, i) => (
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
                ))}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
