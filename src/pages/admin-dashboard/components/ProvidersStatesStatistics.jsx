import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import "../Dashboard.css";

export default function ProvidersStatusStatistics(){
    return(
        <>
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
        </>
    )
}