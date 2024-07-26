import * as React from 'react';
import { Box,Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardContent from '@mui/material/CardContent';


function ProviderCardMedia( props ){
    return (
        <CardContent className='CardContentStyles' >
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
                height: 18,
                }}>
                {props.typeProvider}
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
                        fontSize: props.modal == true ? "11px" : "13px",
                        height: 16,
                        fontWeight: 600
                        }}>
                        { props.mini == false ? (
                            props.ciudad + ", " + props.provincia +", "+ props.pais
                            ) : (
                                props.ciudad
                            )
                        }
                    </Typography>
                </Box>
            </Box>
        </CardContent>
    )
}

export default ProviderCardMedia;