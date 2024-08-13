import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CardProviders from "./components/CardProviders/CardProviders";
import ProvidersHeaders from "./components/ProvidersHeader";
import "./Providers.css";

function Providers(props) {
  const [data, SetData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [loadingCategorias, SetLoadingCategorias] = useState(true);
  const [categoriaNombre,SetCategoriaNombre] = useState([]);

  let { idcategory } = useParams();

  useEffect(() => {
    const cargarDatos = async() => {
      try {
        const url = import.meta.env.VITE_API_BASE_URL + "/categorias" ;
        await axios.get(url)
            .then( respons =>{
                let catNombres=[];
                if (idcategory) {
                  catNombres = respons.data.filter(element=> {
                    return element.id == idcategory;
                  });
                } else{
                  catNombres = respons.data
                }
                SetCategoriaNombre(catNombres);
                SetLoadingCategorias(false);
            })
            .catch (error => {
                console.log(error);
            });
        let urlProviders = import.meta.env.VITE_API_BASE_URL;
        if (idcategory == null ) {
          urlProviders += "/buscar?query=";  
        } else {
          urlProviders += "/buscarPorCategoria/" + idcategory;  
        }
        await axios.get(urlProviders)
            .then( respons =>{
              if(respons.status == 200) {
                let providers = respons.data.filter(elem =>{
                  return elem.estado == "ACEPTADO"
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

  return (
    <>
      <Box className="ProvidersPage">
        <ProvidersHeaders />
        <Box className="box-title-categories" sx={{
            backgroundColor: "customColors.blanco",
            borderBottomLeftRadius: '50%',
            paddingBottom: '80px',
          }}>
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
            {!loadingCategorias && idcategory && categoriaNombre[0].nombre}
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
            {!loading && data.length != 0 && `Encontrá desde productos cosméticos y de cuidado personal natural, servicios de salud, hasta terapias
            holísticas y más.`}
             {!loading && !loadingCategorias && data.length === 0 &&(
                <p>No se encontraron proveedores para la categoría <b>{categoriaNombre[0].nombre}.</b></p>
              )
             }
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "customColors.verde",
            height: "100%",
            width: "100%",
            borderTopRightRadius: "100%",
            marginTop: "0px",
            padding: "0px 15px"
          }}
        >
          {data.map((elem, i) => {
            return (
              <CardProviders
                category={elem.categoria.nombre}
                images={elem.imagenes}
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
                key={i}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Providers;
