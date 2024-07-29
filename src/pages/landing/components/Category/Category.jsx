import "./Category.css";
import { Box, Button, Typography } from "@mui/material";
import { CategoryItem } from "./components/CategoryItem";
import { Link } from "react-router-dom";
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
    id: 3,
    title: "Construcción",
    image: ConstruccionImg,
  },
  {
    id: 10,
    title: "Tecnología",
    image: TecnologiaImg,
  },
  {
    id: 6,
    title: "Indumentaria",
    image: IndumentariaImg,
  },
  {
    id: 1,
    title: "Bienestar",
    image: BienestarImg,
  },
  {
    id: 5,
    title: "Gastronomía",
    image: GastronomiaImg,
  },
  {
    id: 4,
    title: "Cultivos",
    image: CultivosImg,
  },
  {
    id: 11,
    title: "Transporte",
    image: TransporteImg,
  },
  {
    id: 9,
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
            <CategoryItem key={item.title} idcategory={item.id} title={item.title} image={item.image} widthBox='152px' fontSizeCategories="15px"/>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/categories" style={{ textDecoration: "none" }}>
          <Button
            className="buttom-category"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ textTransform: "none", fontWeight: 700, color: "customColors.blanco" }}>
              Ver más Categorías
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
