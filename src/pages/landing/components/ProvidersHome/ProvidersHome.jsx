import * as React from 'react';
import { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import './ProvidersHome.css';
import CardProviders from '../../../providers/components/CardProviders/CardProviders';
import lavanda1 from "../../../providers/images/lavanda1.png";
import lavanda2 from "../../../providers/images/lavanda2.png";
import lavanda3 from "../../../providers/images/lavanda3.png";
import gastronomia from "../../../providers/images/gastronomia1.png";
import tomato from "../../../providers/images/tomato.png";
import upcycling from "../../../providers/images/upcycling.png";

function ProvidersHome(props){
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
          category: "Gastronomia",
          image: [gastronomia],
          nameProvider: "Avocado",
          typeProvider: "Cocina Natural",
          ciudad: "Godoy Cruz",
          provincia: "Mendoza",
          pais: "Argentina",
          description: `Avocado es un proyecto familiar. Perseguimos una cosmética efectiva, magistral 
                            y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden 
                            al planeta, con principios activos que dejen el pelo sano y la piel bella.`,
          linkFacebook: "www.facebook.com/avocado",
          linkInstagram: "www.instagram.com/avocado",
          linkMail: "avocado@mendoza.com",
          linkWhatsapp: "apiwhatsapp.com/",
        },
        {
          category: "Cultivos",
          image: [tomato],
          nameProvider: "Tomato",
          typeProvider: "Huertas y compost",
          ciudad: "Godoy Cruz",
          provincia: "Mendoza",
          pais: "Argentina",
          description: `Tomato es un proyecto familiar. Perseguimos una cosmética efectiva, magistral 
                            y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden 
                            al planeta, con principios activos que dejen el pelo sano y la piel bella.`,
          linkFacebook: "www.facebook.com/lavanda",
          linkInstagram: "www.instagram.com/lavanda",
          linkMail: "lavanda@mendoza.com",
          linkWhatsapp: "apiwhatsapp.com/",
        },
        {
            category: "Indumentaria",
            image: [upcycling],
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

    return(
        <>
            <Box className='box-providers-home' sx={{
                    backgroundColor: "customColors.verde",
            }}>
                <Typography variant='h3' className='typography-recomendaciones' sx={{
                    color: 'customColors.negro',
                    fontSize: '16px',
                    fontWeight: 600   
                }}>
                    {props.recomendaciones}
                </Typography>
                <Typography variant='h2' className='typography-recomendaciones-title' sx={{
                    color: 'customColors.negro',
                    fontSize: '22px',
                    fontWeight: 700 
                }}>
                    {props.recomendacionesTitle}
                </Typography>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <p>1</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>2</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>3</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>4</p>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ProvidersHome;