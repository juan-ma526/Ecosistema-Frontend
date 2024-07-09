import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Carousel from '../../../../components/Carousel/Carousel';
import lavanda1 from '../../images/lavanda1.png';
import lavanda2 from '../../images/lavanda2.png';
import lavanda3 from '../../images/lavanda3.png';
import './CardProviders.css';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})
(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardProvider() {

    const resp = [{
        category: 'Bienestar',
        image: lavanda1,
        nameProvider: 'Lavanda',
        typeProvider: 'Cosmetica Natural',
        ciudad: 'Godoy Cruz',
        provincia: 'Mendoza',
        pais: 'Argentina',
        description: `Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral 
                        y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden 
                        al planeta, con principios activos que dejen el pelo sano y la piel bella.`,
        linkFacebook: 'www.facebook.com/lavanda',
        linkInstagram: 'www.instagram.com/lavanda',
        linkMail: 'lavanda@mendoza.com',
        linkWhatsapp: 'apiwhatsapp.com/'
    },
    {
        category: 'Bienestar',
        image: lavanda2,
        nameProvider: 'Lavanda',
        typeProvider: 'Cosmetica Natural',
        ciudad: 'Godoy Cruz',
        provincia: 'Mendoza',
        pais: 'Argentina',
        description: `Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral 
                        y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden 
                        al planeta, con principios activos que dejen el pelo sano y la piel bella.`,
        linkFacebook: 'www.facebook.com/lavanda',
        linkInstagram: 'www.instagram.com/lavanda',
        linkMail: 'lavanda@mendoza.com',
        linkWhatsapp: 'apiwhatsapp.com/'
    },
    {
        category: 'Bienestar',
        image: lavanda3,
        nameProvider: 'Lavanda',
        typeProvider: 'Cosmetica Natural',
        ciudad: 'Godoy Cruz',
        provincia: 'Mendoza',
        pais: 'Argentina',
        description: `Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral 
                        y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden 
                        al planeta, con principios activos que dejen el pelo sano y la piel bella.`,
        linkFacebook: 'www.facebook.com/lavanda',
        linkInstagram: 'www.instagram.com/lavanda',
        linkMail: 'lavanda@mendoza.com',
        linkWhatsapp: 'apiwhatsapp.com/'
    },
];

    const [data, SetData] = useState([]);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    useEffect(() => {
        const cargarDatos = () => {
          try {
            // const response = await fetch("http://localhost:3000/proveedores");
            // const resp = await response.json();
            SetData(resp[0]);
          } catch (error) {
            console.log(error);
          }
        }
        cargarDatos();
      },[]);
  
    return (
      <Card className='cardStyles' sx={{ 
            backgroundColor: 'customColors.grisClaro'
        }}>
        <Box sx={{margin: '0px 12px'}}>
            <Box sx={{textAlign:'-webkit-right'}}>
                <CardHeader className='cardHeaderStyles'
                title={data.category}
                sx={{
                    backgroundColor: 'customColors.blanco',
                    borderColor: 'customColors.verde',
                    color: 'customColors.violeta',
                }}
                />
                <Carousel elements={[lavanda1,lavanda2,lavanda3]} styleradius='16px 0px 16px 16px' />
            </Box>
            <CardContent className='CardContentStyles' >
                <Typography variant='h2' sx={{ 
                    color: "customColors.negro",
                    fontSize: 18,
                    height: 24,
                }}>
                    {data.nameProvider}
                </Typography>
                <Typography variant='subtitle1' sx={{ 
                    color: "customColors.violeta",
                    fontSize: 13,
                    height: 18,
                    }}>
                    {data.typeProvider}
                </Typography>
                <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'left', margin: '8px 5px 0px 5px'}}>
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
                            fontSize: 13,
                            height: 20,
                            }}>
                            {data.ciudad}, {data.provincia}, {data.pais}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{
                padding: '30px 5px 0px 5px'
            }}>
                <CardContent>
                    <Typography paragraph sx={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 400,
                        lineHeight: 1.25,
                        color: 'customColors.negro'
                        }}>
                        {data.description}
                    </Typography>
                    <Typography paragraph sx={{
                        fontSize: 16,
                        fontWeight: 500,
                        marginTop: '30px'
                    }}>
                        Contactanos
                    </Typography>
                    <Box className='Flex'>
                        <Box className='flexbox'> 
                            <IconButton aria-label="add to favorites" sx={{ textAlign: "center"}}>
                                <WhatsAppIcon sx={{ color: "customColors.violeta"}}/>
                            </IconButton>
                            <Typography variant="body2" sx={{ color: "customColors.negro", fontSize: 13}}>
                                Whatsapp
                            </Typography>
                        </Box>
                        <Box className='flexbox'>
                            <IconButton aria-label="add to favorites" sx={{ textAlign: "center"}}>
                                <InstagramIcon sx={{ color: "customColors.violeta"}}/>
                            </IconButton>
                            <Typography variant="body2" sx={{ color: "customColors.negro", fontSize: 13}}>
                                Instagram
                            </Typography>
                        </Box>
                        <Box className='flexbox'>
                            <IconButton aria-label="add to favorites" sx={{ textAlign: "center"}}>
                                <FacebookIcon sx={{ color: "customColors.violeta"}}/>
                            </IconButton>
                            <Typography variant="body2" sx={{ color: "customColors.negro", fontSize: 13}}>
                                Facebook
                            </Typography>
                        </Box>
                        <Box className='flexbox'>
                            <IconButton aria-label="add to favorites" sx={{ textAlign: "center"}}>
                                <MailOutlineIcon sx={{ color: "customColors.violeta"}}/>
                            </IconButton>
                            <Typography variant="body2" sx={{ color: "customColors.negro", fontSize: 13}}>
                                Mail
                            </Typography>
                        </Box>
                    </Box>
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
                    height:24,
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
