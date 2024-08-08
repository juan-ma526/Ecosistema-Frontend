import * as React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./CardProvidersAdmin.css"
import { Box } from '@mui/material';


export default function CardProvidersAdmin( props ) {

  return (
    <Card onClick={(event) => {props.onClick(event, props.idprovider)}
    } className='cardStylesProvAdmin' sx={{ backgroundColor: 'customColors.grisClaro' }}>
      <Box className='BoxCardProvidersData' sx={{display:'inline-block'}} >
        <CardHeader
          sx={{
            color: 'customColors.violeta'
          }}
          title = {props.elemento.nombre}
        />
        <Divider variant="left" sx={{
          marginLeft: '5px', 
          borderColor: 'customColors.verde',
          marginRight:'20%'
          }}/>
        <CardContent>
          <Typography variant="body2" sx={{color:"customColors.negro"}}>
            {props.elemento.tipoProveedor}
          </Typography>
        </CardContent>
      </Box>
      <Box className='BoxCardProvidersButton' sx={{display:'inline-block'}} >
        <IconButton aria-label="share">
          <ArrowForwardIosIcon />  
        </IconButton>
      </Box>
    </Card>
  );
}
