import * as React from 'react';
import {Box, Typography} from '@mui/material';
import '../Providers.css';

function ProvidersHeaders(){
    return(
        <Box className='ProvidersHeader' >
            <Typography variant='h1' sx={{ 
                color: 'customColors.blanco',
                fontSize: '18px',
                fontWeight: 700,
                paddingTop: '120px'
                }}>
                    PROVEEDORES
            </Typography>
            <Typography sx={{ 
                color: 'customColors.blanco',
                fontSize: '28px',
                fontWeight: 500,
                paddingTop: '12px'
            }}>
                Directorio ECO
            </Typography>
            <Typography sx={{ 
                color: 'customColors.blanco',
                fontSize: '24px',
                fontWeight: 400,
                paddingTop: '12px',
                width: '80%'
                }}>
                Descubrí a quienes comparten tu pasión por 
                el impacto positivo y la sostenibilidad
            </Typography>
        </Box>
    )
}

export default ProvidersHeaders;