import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CardProviders from "./components/CardProviders/CardProviders";
import ProvidersHeaders from "./components/ProvidersHeader";
import lavanda1 from "./images/lavanda1.png";
import lavanda2 from "./images/lavanda2.png";
import lavanda3 from "./images/lavanda3.png";
import "./Providers.css";
import SearchBar from "../../components/Searchbar";

function Providers(props) {
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
    {
      category: "Bienestar",
      image: [lavanda1, lavanda3],
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
    {
      category: "Bienestar",
      image: [lavanda2, lavanda3],
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

  const [data, SetData] = useState([]);

  useEffect(() => {
    const cargarDatos = () => {
      try {
        // const response = await fetch("http://localhost:3000/proveedores");
        // const resp = await response.json();
        SetData(resp);
      } catch (error) {
        console.log(error);
      }
    };
    cargarDatos();
  }, []);

  return (
    <>
      <Box className="ProvidersPage">
        <SearchBar />
        <ProvidersHeaders></ProvidersHeaders>
        <Box className="box-title-categories">
          <Typography
            variant="h2"
            sx={{
              color: "customColors.negro",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            Categorias
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "customColors.violeta",
              fontSize: "20px",
              fontWeight: 600,
              margin: "12px 0px 0px 0px",
            }}
          >
            {/* {props.nameCategory} */}
            Bienestar
          </Typography>
          <br />
          <Typography
            variant="p"
            sx={{
              color: "customColors.negro",
              fontSize: "16px",
              fontWeight: 500,
              marginTop: "12px",
              paddingTop: "25px",
            }}
          >
            {/* {props.nameCategory} */}
            Encontrá desde productos cosméticos y de cuidado personal natural, servicios de salud, hasta terapias
            holísticas y más.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "customColors.verde",
            height: "100%",
            width: "360px",
            borderTopRightRadius: "100%",
            marginTop: "0px",
          }}
        >
          {data.map((elem, i) => {
            return (
              <CardProviders
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
        <br />
      </Box>
    </>
  );
}

export default Providers;
