/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import ProviderCardHeaderMin from '../ProviderCardHeaderMin';
import ProviderCardMedia from '../ProviderCardMedia';
import ProviderCardSocialNets from '../ProviderCardSocialNets';
import ProviderCardDescription from '../ProviderCardDescription';
import Carousel from '../../../../components/Carousel/Carousel';
import './CardProviders.css';

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})
// eslint-disable-next-line no-unexpected-multiline
(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardProvider(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    // Extraer el nombre de objetos si están presentes
    const categoria = props.categoria ? props.categoria.nombre : "Categoría Desconocida";
    const provincia = props.provincia ? props.provincia.nombre : "Provincia Desconocida";
    const pais = props.pais ? props.pais.nombre : "País Desconocido";

    return (
      <Card className='cardStyles' sx={{ 
            backgroundColor: 'customColors.grisClaro'
        }}>
        <Box sx={{margin: '0px 12px'}}>
            <Box sx={{textAlign:'-webkit-right'}}>
              <ProviderCardHeaderMin category={categoria} estiloHeader='cardHeaderStyles' />
              <Carousel elements={props.imagenes || []} styleradius='16px 0px 16px 16px' />
            </Box>
            <ProviderCardMedia 
                nameProvider={props.nombre || "Nombre Desconocido"} 
                typeProvider={props.tipoProveedor || "Tipo Desconocido"}
                ciudad={props.ciudad || "Ciudad Desconocida"}
                provincia={provincia}
                pais={pais}
                mini={false}
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{
                padding: '30px 5px 0px 5px'
            }}>
                <CardContent>
                    <ProviderCardDescription 
                      description={props.description || "Descripción no disponible"} 
                      marginBottomDescription='16px' 
                      fontSizeDescription='16px'
                    />
                    <ProviderCardSocialNets 
                      fontSizeSocialNets='14px'
                    />
                </CardContent>
            </Collapse>
            <CardActions disableSpacing>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                sx={{
                    margin: '5px auto',
                    padding: '0px 0px',
                    width: 24,
                    height: 24,
                    color: 'customColors.violeta'
                }}
            >
                <ExpandMoreIcon />
            </ExpandMore>
            </CardActions>
        </Box>
      </Card>
    );
}

export default CardProvider;
