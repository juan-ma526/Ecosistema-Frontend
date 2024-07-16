import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import SearchBar from '../../components/Searchbar';
import { CategoryItem } from '../landing/components/Category/components/CategoryItem';
import ProvidersHeaders from '../providers/components/ProvidersHeader'; 
import ConstruccionImg from "../../components/Category/images/construccion.png";
import TecnologiaImg from "../../components/Category/images/tecnologia.png";
import IndumentariaImg from "../../components/Category/images/indumentaria.png";
import BienestarImg from "../../components/Category/images/bienestar.png";
import CapacitacionesImg from "../../components/Category/images/capacitaciones.png";
import GastronomiaImg from "../../components/Category/images/gastronomia.png";
import MerchandisingImg from "../../components/Category/images/merchan.png";
import MueblesDecoImg from "../../components/Category/images/muebles.png";
import CultivosImg from "../../components/Category/images/cultivos.png";
import TransporteImg from "../../components/Category/images/transporte.png";
import ReciclajeImg from "../../components/Category/images/reciclaje.png";

const itemsCategory = [
    {id: 1,title: "Bienestar", image: BienestarImg, },
    {id: 2,title: "Capacitaciones", image: CapacitacionesImg,},
    {id: 3,title: "Construcción", image: ConstruccionImg,},
    {id: 4,title: "Cultivos", image: CultivosImg,},
    {id: 5,title: "Gastronomía", image: GastronomiaImg,},
    {id: 6,title: "Indumentaria", image: IndumentariaImg,},
    {id: 7,title: "Merchandising", image: MerchandisingImg,},
    {id: 8,title: "Muebles/Deco", image: MueblesDecoImg,},
    {id: 9,title: "Reciclaje", image: ReciclajeImg,},
    {id: 10,title: "Tecnología", image: TecnologiaImg,},
    {id: 11,title: "Transporte", image: TransporteImg,},
  ];

function CategoriesPage(){
    const [data, SetData] = useState([]);

    useEffect(() => {
        const cargarDatos = () => {
        try {
            // const response = await fetch("http://localhost:3000/proveedores");
            // const resp = await response.json();
            SetData(itemsCategory);
        } catch (error) {
            console.log(error);
        }
        };
        cargarDatos();
    }, []);

    return(
        <>
            <Box className="CategoriesPage" >
                <SearchBar />
                <ProvidersHeaders></ProvidersHeaders>
                <Box className="box-title-categories" sx={{
                    backgroundColor: "customColors.verde",
                    paddingTop: '0px',
                    paddingBottom: '30px'
                }}>
                    <Box>
                        <Typography variant="h2"
                            sx={{
                                color: "customColors.negro",
                                fontSize: "24px",
                                fontWeight: 700,
                                lineHeight: 5,
                                backgroundColor: "customColors.blanco",
                                borderBottomLeftRadius: "100%",
                                margin: "10px 0px"
                            }}
                            >
                            Categorías
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "24px" }}>
                        {data.map((item) => (
                                <CategoryItem key={item.title + item.id} idcategory ={item.id} title={item.title} image={item.image} widthBox="80%"/>    
                            )
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CategoriesPage;