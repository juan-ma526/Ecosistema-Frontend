import * as React from 'react';
import { useState, useEffect } from "react";
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './AdminProvidersPage.css';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function AdminProvidersPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            Proveedores
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                textColor="inherit"
                indicatorColor="secondary"
                scrollButtons={false}
                aria-label="wrapped secondary scrollable prevent tabs example"
                sx={{
                    marginTop: "50px",
                    fontSize: "16px"
                }}
            >
                <Tab label="Nuevos Perfiles" wrapped />
                <Tab label="Aprobados"  sx={{width:128}}/>
                <Tab label="En revisión"  sx={{width:128}}/>
            </Tabs>
        </Box>
        <CustomTabPanel  value={value} index={0} >
            Item One
        </CustomTabPanel>
        <CustomTabPanel  value={value} index={1} >
            Item Two
        </CustomTabPanel>
        <CustomTabPanel  value={value} index={2} >
            Item Three
        </CustomTabPanel>
    </Box>
  );
}