import * as React from 'react';
import Box from '@mui/material/Box';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Typography } from '@mui/material';
import "../Dashboard.css";

export default function BoxVistasPorPublicacion(props) {
    return(
        <Box className='box-publicaciones-container' sx={{borderColor: 'customColors.violeta'}}>
            <Box sx={{width:'70%'}} >
                <Typography sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    lineHeight:'25px'
                }}>{props.namePublication}</Typography>
                <Typography sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight:'25px'
                }}>{props.datePublication}</Typography>
            </Box>
            <Box><RemoveRedEyeOutlinedIcon sx={{color: 'customColors.violeta'}} /></Box>
            <Box><Typography sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight:'25px',
                    color: 'customColors.violeta'
                }}>{props.viewsPublication}</Typography></Box>
        </Box>
    )
}