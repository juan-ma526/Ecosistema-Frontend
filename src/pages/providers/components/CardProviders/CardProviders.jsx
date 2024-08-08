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
// import Carousel from '../../../../components/Carousel/Carousel';
import './CardProviders.css';
import Carrousel from '../../../../components/Publications/components/Carrousel';

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
    const categoria = props.category.nombre ? props.category.nombre : props.category;
    const provincia = props.provincia.nombre ? props.provincia.nombre : props.provincia;
    const pais = props.pais.nombre ? props.pais.nombre : props.pais;
    // eslint-disable-next-line no-unused-vars
    const { image } = props;

    return (
      <Card className='cardStyles' sx={{
            backgroundColor: 'customColors.grisClaro'
        }}>
        <Box sx={{margin: '0px 12px'}}>
            <Box sx={{textAlign:'-webkit-right'}}>
              <ProviderCardHeaderMin category={categoria} estiloHeader='cardHeaderStyles' />
              <Carrousel images={props.images || []} styleradius='16px 0px 16px 16px' />
              {/* <Carousel elements={props.images || []} styleradius='16px 0px 16px 16px' /> */}
            </Box>
            <ProviderCardMedia 
                nameProvider={props.nameProvider || "Nombre Desconocido"} 
                typeProvider={props.typeProvider || "Tipo Desconocido"}
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
                      email = {props.email}
                      facebook = {props.facebook}
                      instagram = {props.instagram}
                      telefono = {props.telefono.substring(1, props.telefono.length)}
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
