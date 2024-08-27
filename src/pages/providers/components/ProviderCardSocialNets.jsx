import * as React from 'react';
import { Link } from "react-router-dom";
import { Box,Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './CardProviders/CardProviders.css';

function ProviderCardSocialNets(props){
    return(
        <>
            <Typography paragraph sx={{
                fontSize: props.fontSizeSocialNets,
                fontWeight: 600,
                margin: '10px 5px'
            }}>
                Contactanos
            </Typography>
            <Box className='Flex'>
                <a className="link-tag-categories" href={`https://api.whatsapp.com/send?phone=${props.telefono}`} target="_blank" rel="noopener noreferrer">
                    <Box className='flexbox'> 
                        <IconButton aria-label="add to favorites" sx={{ textAlign: "center"}}>
                            <WhatsAppIcon sx={{ color: "customColors.violeta"}}/>
                        </IconButton>
                        <Typography variant="body2" sx={{ color: "customColors.negro", fontSize: props.fontSizeSocialNets}}>
                            Whatsapp
                        </Typography>
                    </Box>
                </a>
                <a className="link-tag-categories" href={`https://${props.instagram}`} target="_blank" rel="noopener noreferrer">
                    <Box className='flexbox'>
                        <IconButton aria-label="add to favorites" sx={{ textAlign: "center"}}>
                            <InstagramIcon sx={{ color: "customColors.violeta"}}/>
                        </IconButton>
                        <Typography variant="body2" sx={{ color: "customColors.negro", fontSize: props.fontSizeSocialNets}}>
                            Instagram
                        </Typography>
                    </Box>
                </a>
                <a className="link-tag-categories" href={`https://${props.facebook}`} target="_blank" rel="noopener noreferrer">
                    <Box className='flexbox'>
                        <IconButton aria-label="add to favorites" sx={{ textAlign: "center"}}>
                            <FacebookIcon sx={{ color: "customColors.violeta"}}/>
                        </IconButton>
                        <Typography variant="body2" sx={{ color: "customColors.negro", fontSize: props.fontSizeSocialNets}}>
                            Facebook
                        </Typography>
                    </Box>
                </a>
                <a className="link-tag-categories" href={`https://${props.email}`} target="_blank" rel="noopener noreferrer">
                    <Box className='flexbox'>
                        <IconButton aria-label="add to favorites" sx={{ textAlign: "center"}}>
                            <MailOutlineIcon sx={{ color: "customColors.violeta"}}/>
                        </IconButton>
                        <Typography variant="body2" sx={{ color: "customColors.negro", fontSize: props.fontSizeSocialNets}}>
                            Mail
                        </Typography>
                    </Box>
                </a>
            </Box>
        </>
    )
}

export default ProviderCardSocialNets;