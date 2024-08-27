/* eslint-disable react/prop-types */
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardContent from '@mui/material/CardContent';

// Función para capitalizar cada palabra
const capitalizeWords = (text) => {
  if (!text) return '';
  return text
    .toLowerCase() // Convierte todo a minúsculas primero
    .split(' ') // Divide el texto en palabras
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza la primera letra de cada palabra
    .join(' '); // Une las palabras nuevamente con espacios
};

function ProviderCardMedia(props) {
  return (
    <CardContent className='CardContentStyles'>
      <Typography variant='h2' sx={{ 
        color: "customColors.negro",
        fontSize: props.mini == false ? ("18px") : ("14px"),
        height: props.mini == false ? ("20px") : ("18px"),
      }}>
        {props.nameProvider}
      </Typography>
      <Typography variant='subtitle1' sx={{ 
        color: "customColors.violeta",
        fontSize: props.mini == false ? ("16px") : ("13px"),
        marginBottom: "-10px",
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2, // Limita a 2 líneas
        WebkitBoxOrient: 'vertical'
      }}>
        {props.typeProvider}
      </Typography>
      <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'left', margin: '12px 5px 0px -3px'}}>
        <Box>
          <IconButton aria-label="location" className='inline' sx={{
            width: 24,
            height: 24,
            color: 'customColors.violeta',
            paddingTop: '2px',
            paddingLeft: '5px',
          }}>
            <LocationOnIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="body2" className='inline' sx={{ 
            color: "customColors.negro",
            fontSize: props.modal == true ? "11px" : "13px",
            height: 16,
            fontWeight: 600,
            textTransform: "none", // Desactiva el textTransform de capitalize
          }}>
            {capitalizeWords(props.mini == false ? (
              props.ciudad + ", " + props.provincia +", "+ props.pais
            ) : (
              props.ciudad
            ))}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  )
}

export default ProviderCardMedia;