import { Box, Button, Typography } from "@mui/material";
import { InvitationRedImpacto } from "../../components/InvitationRedImpacto";
import SearchBar from "../../components/Searchbar";
import { HomeTitle } from "./components/HomeTitle/HomeTitle";
import ImpactCompanies from "./components/ImpactCompanies/ImpactCompanies";
import { PublicationsCard } from "../../components/Publications/PublicationsCard";
import slide1 from "../../components/Publications/images/slide1.jpeg";
import slide2 from "../../components/Publications/images/slide2.jpeg";
import slide3 from "../../components/Publications/images/slide3.png";
import { Link } from "react-router-dom";
import { Category } from "./components/Category/Category";
import  ProvidersHomes from "./components/ProvidersHome/ProvidersHome";

const itemPublication = [
  {
    title: "¿Qué es el Upcycling?",
    images: [slide1, slide2, slide3],
    date: "12/2/22",
    firstParagraph:
      " El upcycling, también conocido como supra-reciclaje o reutilización creativa, es un enfoque innovador y sostenible para la gestión de residuos y la conservación de recursos. A diferencia del reciclaje convencional, que implica descomponer materiales para crear nuevos productos, el upcycling busca transformar objetos o materiales desechados en productos de mayor valor, sin degradar su calidad.",
    paragraphs: [
      "Este proceso implica la reimaginación y reinvención de elementos que normalmente se considerarían basura, dándoles una segunda vida y reduciendo la cantidad de desechos enviados a vertederos. El upcycling fomenta la creatividad y la innovación, ya que requiere repensar cómo se pueden utilizar los materiales existentes de nuevas formas.",
      "El upcycling se ha convertido en una poderosa herramienta para abordar los desafíos medioambientales y sociales que enfrenta nuestro planeta. Algunos ejemplos de upcycling incluyen la creación de muebles a            partir de palets de madera, la confección de ropa a partir de telas recicladas o la transformación de objetos cotidianos en piezas de arte. Esto no solo reduce la cantidad de residuos, sino que también fomenta la economía circular, donde los productos y materiales se reutilizan y reciclan continuamente en lugar de desecharse.",
      "El upcycling no solo beneficia al medio ambiente al reducir la cantidad de residuos, sino que también puede generar oportunidades económicas y sociales. Muchos emprendedores y artistas han encontrado en el upcycling una forma de crear productos únicos y sostenibles que atraen a consumidores conscientes de su impacto en el medio ambiente.",
      " En resumen, el upcycling es una práctica innovadora que transforma desechos en tesoros, promoviendo la            sostenibilidad, la creatividad y la reducción de residuos. Al adoptar el upcycling en nuestras vidas y comunidades, podemos contribuir a un mundo más limpio y respetuoso con los recursos naturales. ¡Únete al movimiento del upcycling y ayúdanos a crear un futuro más sostenible!",
    ],
  },
  {
    title: "¿Qué es el Upcycling?",
    images: [slide1, slide2, slide3],
    date: "12/2/22",
    firstParagraph:
      " El upcycling, también conocido como supra-reciclaje o reutilización creativa, es un enfoque innovador y sostenible para la gestión de residuos y la conservación de recursos. A diferencia del reciclaje convencional, que implica descomponer materiales para crear nuevos productos, el upcycling busca transformar objetos o materiales desechados en productos de mayor valor, sin degradar su calidad.",
    paragraphs: [
      "Este proceso implica la reimaginación y reinvención de elementos que normalmente se considerarían basura, dándoles una segunda vida y reduciendo la cantidad de desechos enviados a vertederos. El upcycling fomenta la creatividad y la innovación, ya que requiere repensar cómo se pueden utilizar los materiales existentes de nuevas formas.",
      "El upcycling se ha convertido en una poderosa herramienta para abordar los desafíos medioambientales y sociales que enfrenta nuestro planeta. Algunos ejemplos de upcycling incluyen la creación de muebles a            partir de palets de madera, la confección de ropa a partir de telas recicladas o la transformación de objetos cotidianos en piezas de arte. Esto no solo reduce la cantidad de residuos, sino que también fomenta la economía circular, donde los productos y materiales se reutilizan y reciclan continuamente en lugar de desecharse.",
      "El upcycling no solo beneficia al medio ambiente al reducir la cantidad de residuos, sino que también puede generar oportunidades económicas y sociales. Muchos emprendedores y artistas han encontrado en el upcycling una forma de crear productos únicos y sostenibles que atraen a consumidores conscientes de su impacto en el medio ambiente.",
      " En resumen, el upcycling es una práctica innovadora que transforma desechos en tesoros, promoviendo la            sostenibilidad, la creatividad y la reducción de residuos. Al adoptar el upcycling en nuestras vidas y comunidades, podemos contribuir a un mundo más limpio y respetuoso con los recursos naturales. ¡Únete al movimiento del upcycling y ayúdanos a crear un futuro más sostenible!",
    ],
  },
  {
    title: "¿Qué es el Upcycling?",
    images: [slide1, slide2, slide3],
    date: "12/2/22",
    firstParagraph:
      " El upcycling, también conocido como supra-reciclaje o reutilización creativa, es un enfoque innovador y sostenible para la gestión de residuos y la conservación de recursos. A diferencia del reciclaje convencional, que implica descomponer materiales para crear nuevos productos, el upcycling busca transformar objetos o materiales desechados en productos de mayor valor, sin degradar su calidad.",
    paragraphs: [
      "Este proceso implica la reimaginación y reinvención de elementos que normalmente se considerarían basura, dándoles una segunda vida y reduciendo la cantidad de desechos enviados a vertederos. El upcycling fomenta la creatividad y la innovación, ya que requiere repensar cómo se pueden utilizar los materiales existentes de nuevas formas.",
      "El upcycling se ha convertido en una poderosa herramienta para abordar los desafíos medioambientales y sociales que enfrenta nuestro planeta. Algunos ejemplos de upcycling incluyen la creación de muebles a            partir de palets de madera, la confección de ropa a partir de telas recicladas o la transformación de objetos cotidianos en piezas de arte. Esto no solo reduce la cantidad de residuos, sino que también fomenta la economía circular, donde los productos y materiales se reutilizan y reciclan continuamente en lugar de desecharse.",
      "El upcycling no solo beneficia al medio ambiente al reducir la cantidad de residuos, sino que también puede generar oportunidades económicas y sociales. Muchos emprendedores y artistas han encontrado en el upcycling una forma de crear productos únicos y sostenibles que atraen a consumidores conscientes de su impacto en el medio ambiente.",
      " En resumen, el upcycling es una práctica innovadora que transforma desechos en tesoros, promoviendo la            sostenibilidad, la creatividad y la reducción de residuos. Al adoptar el upcycling en nuestras vidas y comunidades, podemos contribuir a un mundo más limpio y respetuoso con los recursos naturales. ¡Únete al movimiento del upcycling y ayúdanos a crear un futuro más sostenible!",
    ],
  },
];

export default function HomePage() {
  return (
    <div>
      <SearchBar />
      <HomeTitle />
      <ImpactCompanies />
      <InvitationRedImpacto />
      <ProvidersHomes recomendaciones='Recomendaciones para vos' recomendacionesTitle='Proveedores ECO' />
      <Box sx={{ marginTop: "48px" }}>
        <Typography sx={{ fontWeight: 600, marginLeft: "18px" }}>Recomendaciones locales para vos</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: "22px", marginLeft: "18px" }}>Proveedores cerca tuyo</Typography>
      </Box>
      {/* //TODO Falta vista de tarjeta de acuerdo a la direccion, ejemplo : "/" un tamaño y aca "/provedores" otro */}
      <Category />
      <Box sx={{ marginTop: "48px" }}>
        <Typography sx={{ fontWeight: 600, marginLeft: "18px" }}>Publicaciones</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: "22px", marginLeft: "18px" }}>
          Impulsando transformaciones
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "22px" }}>
        {itemPublication.map((item, index) => (
          /* Card */
          <PublicationsCard
            key={index}
            title={item.title}
            date={item.date}
            firstParagraph={item.firstParagraph}
            images={item.images}
            paragraphs={item.paragraphs}
          />
        ))}
      </Box>
      <Link to="/publications">
        <Button
          sx={{
            textTransform: "none",
            width: "152px",
            height: "40px",
            padding: "10px 8px 10px 8px",
            borderRadius: "100px",
            backgroundColor: "customColors.violeta",
            color: "customColors.blanco",
            marginTop: "18px",
            left: "104px",
            marginBottom: "18px",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>Ir a Publicaciones</Typography>
        </Button>
      </Link>
    </div>
  );
}
