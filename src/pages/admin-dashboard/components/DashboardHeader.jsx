import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


export default function DashboardHeader() {

    return(
        <>
            <Box sx={{ maxWidth: { xs: 576, sm: 768 }, bgcolor: 'background.paper', margin: "0px auto"}}>
                <Typography
                    variant="h2"
                    sx={{
                    color: "customColors.negro",
                    fontSize: "28px",
                    lineHeight: "35px",
                    fontWeight: 600,
                    textAlign: "center",
                    marginTop: "96px"
                    }}
                >
                    Dashboard Administrador
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                    color: "customColors.negro",
                    fontSize: "22px",
                    lineHeight: "35px",
                    fontWeight: 600,
                    textAlign: "center",
                    marginTop: "20px"
                    }}
                >
                    Estadísticas Mensuales
                </Typography>
            </Box>
        </>
    )
}
