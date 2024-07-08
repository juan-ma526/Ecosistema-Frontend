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
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import lavanda1 from '../images/lavanda1.png';
import lavanda2 from '../images/lavanda2.png';
import lavanda3 from '../images/lavanda3.png';
import './CardProviders.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
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
        location: 'Godoy Cruz, Mendoza, Argentina',
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
        location: 'Godoy Cruz, Mendoza, Argentina',
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
        location: 'Godoy Cruz, Mendoza, Argentina',
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
      <Card sx={{ 
            width: 328,
            borderRadius: 4,
            margin: '0px 16px',
            paddingTop: '16px',
            paddingBottom: '8px',
            backgroundColor: 'customColors.grisClaro'
        }}>
        <Box sx={{margin: '0px 12px'}}>
            <Box sx={{textAlign:'-webkit-right'}}>
                <CardHeader
                title={data.category}
                sx={{
                    backgroundColor: 'customColors.blanco',
                    width: 96,
                    height: 24,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    border: 1,
                    borderColor: 'customColors.verde',
                    color: 'customColors.violeta',
                    padding: '4px 8px 4px 8px',
                    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
                    textAlign: 'center',
                    fontSize: '13px',
                }}
                />
                <CardMedia
                    component="img"
                    height='128px'
                    image={data.image}
                    alt="Image of Product"
                    sx={{
                        width:'100%',
                        borderTopLeftRadius:'16px',
                        borderBottomLeftRadius:'16px',
                        borderBottomRightRadius:'16px',
                    }}
                />
            </Box>
            <CardContent sx={{
                width: '100%',
                height: 76,
            }}>
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
                <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'left', margin: '8px 5px 0px 5px'       }}>
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
                            {data.location}
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
