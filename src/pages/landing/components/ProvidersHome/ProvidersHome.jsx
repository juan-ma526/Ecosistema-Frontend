// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import './ProvidersHome.css';
import axios from "axios";
import MiniCardProviders from './MiniCardProvider/MiniCardProvider';
import lavanda1 from "../../../providers/images/lavanda1.png";
import lavanda2 from "../../../providers/images/lavanda2.png";
import lavanda3 from "../../../providers/images/lavanda3.png";

// eslint-disable-next-line no-unused-vars
function ProvidersHome(props){

  /*Quitar variable resp, cuando se implemente cloudinary en la BD y adaptar el campo imagen*/
  const resp = [
    {
      idProveedor: 1,
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
      idCategory: 1,
    },
    {
      idProveedor: 2,
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
      idCategory: 1,
    },
    {
      idProveedor: 3,
      category: "Capacitaciones",
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
      idCategory: 2,
    },
    {
      idProveedor: 4,
      category: "Construccion",
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
      idCategory: 3,
    },
    {
      idProveedor: 5,
      category: "Construccion",
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
      idCategory: 3,
    },
  ];

    const [data, SetData] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        const cargarDatos = async() => {
          try {
            const urlProviders = import.meta.env.VITE_API_BASE_URL + "/buscar?query=";  
            await axios.get(urlProviders)
                .then( respons =>{
                  if(respons.status == 200) {
                    
                    let providers = [];
                    respons.data.map( (elem, i) => {
                        if(i<4){
                          providers.push(elem);
                        }
                    })
                    providers.map(element => {
                      let providerImage = resp.filter(elem => {
                        return elem.idProveedor == element.id;
                      })
                      element.image = providerImage[0].image
                    })
                    SetData(providers);
                    SetLoading(false);
                  }
                })
                .catch (error => {
                    console.log(error);
                });
          } catch (error) {
            console.log(error);
          }
        };
        cargarDatos();
      }, []);

    return(
        <>
          <Box className='box-providers-home' sx={{
                  backgroundColor: "customColors.verde",
          }}>
              <Grid container rowSpacing={1} columnSpacing={1} >
                {data.map((elem, i) => {
                    return (
                      <Grid item key={i} xs={6}>
                          <MiniCardProviders
                            category={elem.categoria.nombre}
                            image={elem.image[0]}
                            nameProvider={elem.nombre}
                            typeProvider={elem.tipoProveedor}
                            ciudad={elem.ciudad}
                            provincia={elem.provincia.nombre}
                            pais={elem.pais.nombre}
                            description={elem.descripcion}
                            email = {elem.email}
                            facebook = {elem.facebook}
                            instagram = {elem.instagram}
                            telefono = {elem.telefono}
                          />
                      </Grid>
                    );
                  })}
              </Grid>
          </Box>
        </>
    )
}

export default ProvidersHome;