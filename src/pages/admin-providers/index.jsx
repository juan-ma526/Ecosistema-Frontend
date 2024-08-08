import * as React from 'react';
import { useState, useEffect } from "react";
import CardProvidersAdmin from "./components/CardProvidersAdmin";
import axios from "axios";
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './AdminProvidersPage.css';
import { Link } from 'react-router-dom';
import AdminProvidersDetail from "./components/AdminProvidersDetail"


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
  const [data, SetData] = useState([]);
  const [cardProvider, SetCardProvider] = useState(true);
  const [loading, SetLoading] = useState(true);
  const route = "/adminProvidersDetail/"

  useEffect(() => {
    const cargarDatos = async() => {
      try {
        const urlProviders = "http://localhost:8080/buscar?query=";
        await axios.get(urlProviders)
            .then( respons =>{
              if(respons.status == 200) {
                let providers = [];
                switch (value) {
                  case 0: {
                    providers = respons.data.filter( (elem) => {
                      return (elem.estado == 'REVISION_INICIAL' || elem.estado == 'CAMBIOS_REALIZADOS');
                    })
                    break;
                  }
                  case 1: {
                    providers = respons.data.filter( (elem) => {
                      return (elem.estado == 'ACEPTADO');
                    })
                    break;
                  }
                  case 2: {
                    providers = respons.data.filter( (elem) => {
                      return (elem.estado == 'REQUIERE_CAMBIOS');
                    })
                    break;
                  }
                  case 3: {
                    providers = respons.data.filter( (elem) => {
                      return (elem.estado == 'DENEGADO');
                    })
                    break;
                  }
                  default: {
                    providers = [];
                  }
                } 
                SetData(providers);
                SetLoading(true);
              }
            })
            .catch (error => {
                console.log(error);
            });
      } catch (error) {
        console.log(error);
      }
    };
    cargarDatos();
  }, [value]);

const handleClickCard = (event, idprovider) => {
    SetCardProvider(false);
    let providers = data.filter( (elem) => {
      return (elem.id === idprovider);
    })
    SetData(providers);
};

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(cardProvider == false) {
     SetCardProvider(true);
    }
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
                <Tab label="Denegados"  sx={{width:128}}/>
            </Tabs>
        </Box>
        <CustomTabPanel  value={value} index={0} >
          {data.map((elem, i) => {
              switch (cardProvider) {
                case true: {
                    return ( loading && <Box key={i}  > 
                    <CardProvidersAdmin idprovider={elem.id} onClick={handleClickCard} item  xs={6} elemento={elem}/></Box>)
                  }
                case false: {
                  return ( loading && <AdminProvidersDetail item key={i} xs={6} elemento={elem}/>)
                }
                default:
                  return (<p>Cargando información ...</p>)
              }
            }
          )}
        </CustomTabPanel>
        <CustomTabPanel  value={value} index={1} >
          {data.map((elem, i) => {
              switch (cardProvider) {
                case true: {
                    return ( loading && <Box key={i}  > 
                    <CardProvidersAdmin idprovider={elem.id} onClick={handleClickCard} item  xs={6} elemento={elem}/></Box>)
                  }
                case false: {
                  return ( loading && <AdminProvidersDetail item key={i} xs={6} elemento={elem}/>)
                }
                default:
                  return (<p>Cargando información ...</p>)
              }
            }
          )}
        </CustomTabPanel>
        <CustomTabPanel  value={value} index={2} >
        {data.map((elem, i) => {
              switch (cardProvider) {
                case true: {
                    return ( loading && <Box key={i}  > 
                    <CardProvidersAdmin idprovider={elem.id} onClick={handleClickCard} item  xs={6} elemento={elem}/></Box>)
                  }
                case false: {
                  return ( loading && <AdminProvidersDetail item key={i} xs={6} elemento={elem}/>)
                }
                default:
                  return (<p>Cargando información ...</p>)
              }
            }
          )}
        </CustomTabPanel>
        <CustomTabPanel  value={value} index={3} >
        {data.map((elem, i) => {
              switch (cardProvider) {
                case true: {
                    return ( loading && <Box key={i}  > 
                    <CardProvidersAdmin idprovider={elem.id} onClick={handleClickCard} item  xs={6} elemento={elem}/></Box>)
                  }
                case false: {
                  return ( loading && <AdminProvidersDetail item key={i} xs={6} elemento={elem}/>)
                }
                default:
                  return (<p>Cargando información ...</p>)
              }
            }
          )}
        </CustomTabPanel>
    </Box>
  );
}