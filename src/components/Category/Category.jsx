import "./Category.css";
import { Box, Button, Typography } from "@mui/material";
import { CategoryItem } from "./components/CategoryItem";
import ConstruccionImg from "./images/construccion.png";
import TecnologiaImg from "./images/tecnologia.png";
import IndumentariaImg from "./images/indumentaria.png";
import BienestarImg from "./images/bienestar.png";
import GastronomiaImg from "./images/gastronomia.png";
import CultivosImg from "./images/cultivos.png";
import TransporteImg from "./images/transporte.png";
import ReciclajeImg from "./images/reciclaje.png";

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
    title: "Cultivaje",
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
            <CategoryItem key={item.title} title={item.title} image={item.image} />
          ))}
        </Box>
      </Box>
      <Button className="buttom-category">
        <Typography sx={{ textTransform: "none", fontWeight: 700, color: "customColors.blanco" }}>
          Ver más Categorías
        </Typography>
      </Button>
    </Box>
  );
};
