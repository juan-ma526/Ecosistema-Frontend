// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import './ProvidersHome.css';
import axios from "axios";
import MiniCardProviders from './MiniCardProvider/MiniCardProvider';

function ProvidersHome(props){
    const [data, SetData] = useState([]);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        const cargarDatos = async() => {
          try {
            const urlProviders = import.meta.env.VITE_API_BASE_URL + "/buscar?query=";  
            await axios.get(urlProviders)
                .then( respons =>{
                  if(respons.status == 200) {
                    let providersHome = [];
                    let providers = respons.data.filter(elem =>{
                      return elem.estado == "ACEPTADO"
                    })
                    if(providers.length>3){
                      providers.map( (elem, i) => {
                        if(i<4){
                          providersHome.push(elem);
                        }
                      })
                    } else {
                      providersHome = providers
                    }
                    console.log(providersHome);
                    SetData(providersHome);
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
                            image={elem.imagenes[0].url}
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