import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import axios from "axios";
import { useState,useEffect } from "react";
import "../Dashboard.css";

export default function ProvidersStatusStatistics(){
    const [data,SetData] = useState([]);
    const [loading,SetLoading] = useState(false);

    useEffect(() => {
        const cargarDatos = async() => {
          try {
            const url = import.meta.env.VITE_API_BASE_URL + "/estadisticasProveedores";
            const token = JSON.parse(localStorage.getItem('token'));
            const response = await axios.get(url, {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            });
            if(response.status == 200) {
              SetData(Object.entries(response.data));
              SetLoading(true);
            } else {
              console.log('error');
            }
          }
          catch(error) {
            console.log(error);
          }
        }
        cargarDatos();
      }, []);



    return(
        <>
            <Box className="box-nuevos-perfiles" sx={{
                backgroundColor: 'customColors.violeta',
                color: 'customColors.blanco'
            }}>
                <Typography className='box-inline' >Nuevos perfiles creados</Typography>
                <Typography className='box-inline' >{loading && data[0][1]}</Typography>
            </Box>
            <Box className='box-estados-container' >
                <Box className='box-estados' sx={{border: '2px solid', borderColor: 'customColors.verde'}}>
                    <Typography className='box-inline-status' >Aprobados</Typography>
                    <Divider variant="left" sx={{
                        marginLeft: '5px', 
                        borderColor: 'customColors.verde',
                        marginRight:'20%'
                    }}/>
                    <Typography className='box-inline-status' >{loading && data[3][1]}</Typography>
                </Box>
                <Box className='box-estados' sx={{border: '2px solid', borderColor: 'customColors.naranja'}}>
                    <Typography className='box-inline-status' >En revisión</Typography>
                    <Divider variant="left" sx={{
                        marginLeft: '5px', 
                        borderColor: 'customColors.naranja',
                        marginRight:'20%'
                    }}/>
                    <Typography className='box-inline-status' >{loading && data[1][1]}</Typography>
                </Box>
                <Box className='box-estados' sx={{border: '2px solid', borderColor: 'customColors.rojo'}}>
                    <Typography className='box-inline-status' >Denegados</Typography>
                    <Divider variant="left" sx={{
                        marginLeft: '5px', 
                        borderColor: 'customColors.rojo',
                        marginRight:'20%'
                    }}/>
                    <Typography className='box-inline-status' >{loading && data[2][1]}</Typography>
                </Box>
            </Box>
        </>
    )
}