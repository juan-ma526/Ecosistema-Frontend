import * as React from 'react';
import { Typography } from '@mui/material';

function ProviderCardDescription (props) {
    return(
        <Typography paragraph sx={{
            textAlign: 'center',
            fontSize: props.fontSizeDescription,
            fontWeight: 400,
            lineHeight: 1.25,
            marginBottom: props.marginBottomDescription,
            color: 'customColors.negro'
            }}>
            {props.description}
        </Typography>
    )
}

export default ProviderCardDescription;