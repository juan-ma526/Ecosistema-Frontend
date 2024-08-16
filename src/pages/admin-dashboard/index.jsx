import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DashboardHeader from './components/DashboardHeader';
import TableCategories from './components/TableCategories';
import BoxVistasPorPublicacion from './components/BoxVistasPorPublicacion';
import "./Dashboard.css"



export default function DashboardAdministrador() {
    const dataPublication = [
        {
            namePublication: '¿Que es el upciclynga asasa asdada adasd a?',
            datePublication: '12/02/2024',
            viewsPublication: 50
        },
        {
            namePublication: '¿Que es asdasdad el upciclyng?',
            datePublication: '12/02/2024',
            viewsPublication: 50
        },
        {
            namePublication: '¿Que esaaaaaaa aaaaa el upciclyng?',
            datePublication: '12/02/2024',
            viewsPublication: 50
        },
    ]

    return(
        <>
            <DashboardHeader />
            <Box className="box-nuevos-perfiles" sx={{
                backgroundColor: 'customColors.violeta',
                color: 'customColors.blanco'
            }}>
                <Typography className='box-inline' >Nuevos perfiles creados</Typography>
                <Typography className='box-inline' >100</Typography>
            </Box>
            <Box className='box-estados-container' >
                <Box className='box-estados' sx={{border: '2px solid', borderColor: 'customColors.verde'}}>
                    <Typography className='box-inline-status' >Aprobados</Typography>
                    <Divider variant="left" sx={{
                        marginLeft: '5px', 
                        borderColor: 'customColors.verde',
                        marginRight:'20%'
                    }}/>
                    <Typography className='box-inline-status' >80</Typography>
                </Box>
                <Box className='box-estados' sx={{border: '2px solid', borderColor: 'customColors.naranja'}}>
                    <Typography className='box-inline-status' >En revisión</Typography>
                    <Divider variant="left" sx={{
                        marginLeft: '5px', 
                        borderColor: 'customColors.naranja',
                        marginRight:'20%'
                    }}/>
                    <Typography className='box-inline-status' >10</Typography>
                </Box>
                <Box className='box-estados' sx={{border: '2px solid', borderColor: 'customColors.rojo'}}>
                    <Typography className='box-inline-status' >Denegados</Typography>
                    <Divider variant="left" sx={{
                        marginLeft: '5px', 
                        borderColor: 'customColors.rojo',
                        marginRight:'20%'
                    }}/>
                    <Typography className='box-inline-status' >10</Typography>
                </Box>
            </Box>
            <TableCategories />
            <Box sx={{textAlign: 'center'}}>
                <Typography
                        variant="subtitle"
                        sx={{
                        color: "customColors.negro",
                        fontSize: "20px",
                        lineHeight: "30px",
                        fontWeight: 700,
                        textAlign: "center",
                        marginTop: "110px"
                        }}
                    >
                        Visualizaciones por Publicación
                </Typography>
            </Box>
            {dataPublication.map( (elem, i) =>{
                return(
                <BoxVistasPorPublicacion 
                    key={i}
                    namePublication={elem.namePublication} 
                    datePublication={elem.datePublication}
                    viewsPublication={elem.viewsPublication}
                />)
            })}
        </>
    )
}
