import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function CardProvidersAdmin() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="share">
            <ArrowForwardIosIcon />  
          </IconButton>
        }
        title="Lavanda"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Tipo de Proveedor
        </Typography>
      </CardContent>
    </Card>
  );
}
