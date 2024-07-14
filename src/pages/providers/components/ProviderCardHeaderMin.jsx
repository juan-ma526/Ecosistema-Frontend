import * as React from 'react';
import { Box } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import './CardProviders/CardProviders.css';

function ProviderCardHeaderMin( props ){
    return (
        <>
            <CardHeader className={props.estiloHeader}
                    title={props.category}
                    sx={{
                        backgroundColor: 'customColors.blanco',
                        borderColor: 'customColors.verde',
                        color: 'customColors.violeta',
                    }}
            />
        </>
    )
}

export default ProviderCardHeaderMin;