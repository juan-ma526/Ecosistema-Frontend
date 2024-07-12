import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './MiniCardProviders.css';


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

function MiniCardProvider( props ) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Card className='cardStyles' sx={{ 
            backgroundColor: 'customColors.grisClaro'
        }}>
        <Box sx={{margin: '0px 5px'}}>
            <Box sx={{textAlign:'-webkit-right'}}>
                <CardHeader className='cardHeaderStyles'
                title={props.category}
                sx={{
                    backgroundColor: 'customColors.blanco',
                    borderColor: 'customColors.verde',
                    color: 'customColors.violeta',
                }}
                />
                <img className='miniImagen' src={props.image}  alt="imagen principal" sx={{
                        borderRadius:"16px",
                }} />
            </Box>
            <CardContent className='CardContentStyles' >
                <Typography variant='h2' sx={{ 
                    color: "customColors.negro",
                    fontSize: 16,
                    height: 20,
                }}>
                    {props.nameProvider}
                </Typography>
                <Typography variant='subtitle1' sx={{ 
                    color: "customColors.violeta",
                    fontSize: 13,
                    height: 16,
                    }}>
                    {props.typeProvider}
                </Typography>
                <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'left', margin: '8px 4px 0px 4px'}}>
                    <Box>
                        <IconButton aria-label="location" className='inline' sx={{
                            width: 24,
                            height: 24,
                            color: 'customColors.violeta',
                            paddingTop: '2px',
                            paddingLeft: '0px',
                            
                        }}>
                            <LocationOnIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <Typography variant="body2" className='inline' sx={{ 
                            color: "customColors.negro",
                            fontSize: 13,
                            height: 16,
                            }}>
                            {props.ciudad}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Box>
      </Card>
    );

}

export default MiniCardProvider;
