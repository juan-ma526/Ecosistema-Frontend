import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import ProviderCardHeaderMin  from '../ProviderCardHeaderMin';
import ProviderCardMedia  from '../ProviderCardMedia';
import ProviderCardSocialNets from '../ProviderCardSocialNets';
import ProviderCardDescription from '../ProviderCardDescription';
import Carousel from '../../../../components/Carousel/Carousel';
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

function CardProvider( props ) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Card className='cardStyles' sx={{ 
            backgroundColor: 'customColors.grisClaro'
        }}>
        <Box sx={{margin: '0px 12px'}}>
            <Box sx={{textAlign:'-webkit-right'}}>
              <ProviderCardHeaderMin category= {props.category} estiloHeader='cardHeaderStyles' />
              <Carousel elements={props.image} styleradius='16px 0px 16px 16px' />
            </Box>
            <ProviderCardMedia 
                nameProvider={props.nameProvider} 
                typeProvider={props.typeProvider}
                ciudad={props.ciudad}
                provincia={props.provincia}
                pais={props.pais}
                mini = {false}
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{
                padding: '30px 5px 0px 5px'
            }}>
                <CardContent>
                    <ProviderCardDescription 
                      description = {props.description} 
                      marginBottomDescription='16px' 
                      fontSizeDescription='16px'
                    />
                    <ProviderCardSocialNets 
                      fontSizeSocialNets='16px'
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
