import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';


export default function ResultsEmpty() {
    return(
        <>
            <Box sx={{ backgroundColor:'customColors.grisClaro',
                margin: "20px auto",
                width: '90%',
                borderRadius: '16px',
                color:'customColors.violeta',
                textAlign: 'center',
                }}>
                <SearchOffIcon sx={{ 
                    marginTop: '20px',
                    fontSize: '60px',
                    color:'customColors.violeta',
                }}></SearchOffIcon>
                <Typography sx={{ 
                    margin: '20px auto',
                    fontSize: '22px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    color:'customColors.violeta'
                    }}>
                    No se encontraron resultados para tu búsqueda.
                </Typography>
                <Typography sx={{ 
                    margin: '20px auto',
                    paddingBottom: '20px',
                    fontSize: '18px',
                    lineHeight: '20px',
                    fontWeight: 500,
                    color:'customColors.negro'
                    }}>
                    Intentá nuevamente con otra consulta.
                </Typography>
            </Box>
        </>
    )
}
