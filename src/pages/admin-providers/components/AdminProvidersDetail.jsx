import * as React from 'react';
import { useState,useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button,Typography, } from '@mui/material';
import axios from "axios";
import { useContext } from "react";
import { UserContext } from '../../../context/userContext';
import ErrorAlert from "../../../modals/ErrorAlert";
import SuccessAlert from "../../../modals/SuccessAlert";
import './AdminProvidersDetail.css';
import EditPublication from '../../profile/edit-publication';

export default function AdminProvidersDetail(props) {
    let idprovider = props.elemento.id;
    const { user } = useContext(UserContext);
    const [estado,SetEstado] = useState('REVISION_INICIAL');
    const [feedback,SetFeedback] = useState('');
    const [displayText, SetDisplayText] = useState('block')
    const [displayButton, SetDisplayButton] = useState('block')
    const [disabledButton, SetDisabledButton] = useState(true)
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState(null);

    const handleChange = (event) => {
        SetEstado(event.target.value);
        if (event.target.value == 'ACEPTADO') {
            SetDisplayText('none');
            SetDisplayButton('flex');
            SetFeedback(' ');
            SetDisabledButton(false);
        } else {
            if(event.target.value != 'REVISION_INICIAL'){
                SetDisplayButton('flex')
            }
            SetDisplayText('block');
            SetFeedback('');
            SetDisabledButton(true);
        }
    };

    useEffect(() => {
        const cargarDatos = async() => {
          try {
            SetFeedback(props.elemento.feedback);
            switch (props.elemento.estado) {
                case "REVISION_INICIAL":
                    SetEstado("REVISION_INICIAL");
                    SetDisplayText('none');
                    SetDisplayButton('none');
                    break;
                case "CAMBIOS_REALIZADOS":
                    SetEstado("REVISION_INICIAL")
                    SetDisplayText('none');
                    SetDisplayButton('none')
                    break;
                case "ACEPTADO":
                    SetEstado("ACEPTADO")
                    SetDisplayText('none');
                    SetDisplayButton('flex');
                    SetDisabledButton(false);
                    break;
                case "REQUIERE_CAMBIOS":
                    SetEstado("REQUIERE_CAMBIOS")
                    SetDisplayText('block');
                    SetDisplayButton('flex')
                    break;
                case "DENEGADO":
                    SetEstado("DENEGADO")
                    SetDisplayText('block');
                    SetDisplayButton('flex')
                    break;
                default:
                    break;
            }
          } catch (error) {
            console.log(error);
          }
        };
        cargarDatos();
      }, []);

    const handleChangeTextField = (event) => {
        SetFeedback(event.target.value);
        if (document.getElementById("feedback_provider").value.length === 0) {
            SetDisabledButton(true);
        } else{
            SetDisabledButton(false);
        }
    };
    const handleCloseAlert = () => {
        setShowAlert(false);
        setAlertType(null);
    };
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            if (estado == 'undefined' || feedback == '') {
                alert("Por favor seleccione un estado o complete el feedback")
            } else {
                let formData = {id: idprovider, estado: estado, feedback: feedback};
                const token = JSON.parse(localStorage.getItem('token'));
                const url = import.meta.env.VITE_API_BASE_URL + "/editarEstado/" +  idprovider;
                if(user.roles =='ADMIN'){
                    const response = await axios.put(url, formData, {
                        headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        },
                    });
                    if(response.status == 200) {
                        setAlertType("success");
                    } else {
                        setAlertType("error");
                    }
                    setShowAlert(true);
                } else{
                    setAlertType("error");
                    setShowAlert(true);
                }
            }
        } catch (error) {
            alert('An error occurred while submitting the data.', error);
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Box className='containerSelect' sx={{ maxWidth: 260 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="state_provider"
                    value={estado}
                    label="Estado"
                    onChange={handleChange}
                    >
                    <MenuItem value="ACEPTADO"><Box className='menuItemList' sx={{
                        backgroundColor: 'customColors.verde',
                        }} /> Aprobado</MenuItem>
                    <MenuItem value="REQUIERE_CAMBIOS"> <Box className='menuItemList' sx={{
                        backgroundColor: 'customColors.naranja',
                        }} /> En revisión</MenuItem>
                    <MenuItem value="DENEGADO"><Box className='menuItemList' sx={{
                        backgroundColor: 'customColors.rojo',
                        }} /> Denegado</MenuItem>
                    <MenuItem value="REVISION_INICIAL" hidden sx={{display: 'none'}}></MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{display: displayText}}>
                <TextField
                    id="feedback_provider"
                    label="Devolución al Proveedor (Obligatorio)"
                    multiline
                    value={feedback}
                    onChange={handleChangeTextField}
                    helperText="Máximo 300 caracteres"
                    rows={6}
                    sx={{ width: '100%', margin: '10px auto', padding: '5%' }}
                />
            </Box>
            <Box
            sx={{
                display: displayButton,
                justifyContent: "center",
            }}
            >
                <Button
                    disabled={disabledButton}
                    onClick={handleSubmit}
                    sx={{
                    textTransform: "none",
                    display: "flex",
                    width: "152px",
                    height: "40px",
                    padding: "10px 8px 10px 8px",
                    borderRadius: "100px",
                    backgroundColor: (disabledButton==true) ? "customColors.gris":"customColors.violeta", 
                    color: (disabledButton==true) ? "customColors.negro":"customColors.blanco",
                    margin: "18px 0",
                    alignItems: "center",
                    justifyContent: "center",
                    }}
                >
                    <Typography sx={{ fontWeight: 700 }}>Enviar</Typography>
                </Button>
            </Box>
            <EditPublication provider = {props.elemento}/>
            {showAlert && alertType === "error" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} type="feedback" />}
            {showAlert && alertType === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} type="feedback" />}
        </>
      );
}