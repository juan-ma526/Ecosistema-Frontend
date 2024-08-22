import * as React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import SearchBar from '../../components/Searchbar';
import CardProviders from "../providers/components/CardProviders/CardProviders";
import ResultsEmpty from './resultsEmpty';


export default function ResultsSearchBar() {
    const [data, SetData] = useState([]);
    const [loading, SetLoading] = useState(false);
    const [results, SetResults] = useState(false);

    let { queryString } = useParams();

    useEffect(() => {
        const cargarDatos = async() => {
            try {
                const url = import.meta.env.VITE_API_BASE_URL + "/buscar?query=" + queryString;
                const response = await axios.get(url);
                if (response.status ===200) {
                    let providers = [];
                    providers = response.data.filter(elem => {
                        return elem.estado === 'ACEPTADO'
                    })
                    SetData(providers);
                    SetLoading(true);
                    if (providers.length > 0) {
                        SetResults(true);
                    } else {
                        SetResults(false);
                    }
                } else{
                  console.log('Error en la peticion. Consulte al Administrador');
                }
            } catch (error) {
            setError("Hubo un problema con la búsqueda. Intentalo de nuevo.");
            }
        };
        cargarDatos();
      }, [queryString]);

    return(
        <>
            <Box sx={{ maxWidth: { xs: 576, sm: 768 }, backgroundColor:'customColors.blanco', margin: "0px auto"}}>
                <SearchBar />
                <Typography
                    variant="h2"
                    sx={{
                    color: "customColors.negro",
                    fontSize: "28px",
                    lineHeight: "35px",
                    fontWeight: 600,
                    textAlign: "center",
                    marginTop: "30px"
                    }}
                >
                    Resultados de tu búsqueda
                </Typography>

                {loading &&  results && data.map((elem, i) => {
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
                {loading &&  !results && <ResultsEmpty />}
            </Box>
        </>
    )
}
