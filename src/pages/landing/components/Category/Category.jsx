import "./Category.css";
import { Box, Button, Typography } from "@mui/material";
import { CategoryItem } from "./components/CategoryItem";
import { Link  } from 'react-router-dom'
import ConstruccionImg from "../../../../components/Category/images/construccion.png";
import TecnologiaImg from "../../../../components/Category/images/tecnologia.png";
import IndumentariaImg from "../../../../components/Category/images/indumentaria.png";
import BienestarImg from "../../../../components/Category/images/bienestar.png";
import GastronomiaImg from "../../../../components/Category/images/gastronomia.png";
import CultivosImg from "../../../../components/Category/images/cultivos.png";
import TransporteImg from "../../../../components/Category/images/transporte.png";
import ReciclajeImg from "../../../../components/Category/images/reciclaje.png";

const itemsCategory = [
  {
    title: "Construcción",
    image: ConstruccionImg,
  },
  {
    title: "Tecnología",
    image: TecnologiaImg,
  },
  {
    title: "Indumentaria",
    image: IndumentariaImg,
  },
  {
    title: "Bienestar",
    image: BienestarImg,
  },
  {
    title: "Gastronomía",
    image: GastronomiaImg,
  },
  {
    title: "Cultivos",
    image: CultivosImg,
  },
  {
    title: "Transporte",
    image: TransporteImg,
  },
  {
    title: "Reciclaje",
    image: ReciclajeImg,
  },
];

export const Category = () => {
  return (
    /* Container gral. */
    <Box sx={{ backgroundColor: "customColors.blanco" }}>
      {/* Category container */}
      <Box sx={{ marginTop: 8 }}>
        <Typography sx={{ textAlign: "center", fontWeight: 600 }}>Red de Proveedores ECO</Typography>
        <Typography sx={{ textAlign: "center", fontWeight: 700, fontSize: "24px" }}>Categorías</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "24px" }}>
          {itemsCategory.map((item) => (
            <CategoryItem key={item.title} title={item.title} image={item.image} widthBox='152px'/>
          ))}
        </Box>
      </Box>
      <Link to="/categories">
        <Button className="buttom-category">
          <Typography sx={{ textTransform: "none", fontWeight: 700, color: "customColors.blanco" }}>
            Ver más Categorías
          </Typography>
        </Button>
      </Link>
    </Box>
  );
};
