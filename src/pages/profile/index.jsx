// eslint-disable-next-line no-unused-vars
import React from "react";
import ProfileName from "./components/ProfileName";
import ButtonCharge from "./components/ButtonCharge";
import ProductsTitle from "./components/ProductsTitle";
import ProductCard from "./components/ProductCard";
import { Box } from "@mui/material";

const itemPublication = [
    {
      title: "Lavanda",
      state: "Postulado",
      firstParagraph:
        "Gracias por querer formar parte de EcoSistema!",
      paragraphs: [
        "La postulación de tu Producto/Servicio fue enviada correctamente."
      ],
      footer: "Pronto tendrás más novedades."
    },
]

export default function ProfilePage() {
  return (
    <Box>
      <ProfileName />
      <ButtonCharge />
      <ProductsTitle />
      
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {itemPublication.map((item, index) => (
          /* Card */
          <ProductCard
            key={index}
            title={item.title}
            state={item.state}
            firstParagraph={item.firstParagraph}
            paragraphs={item.paragraphs}
            footer={item.footer}
          />
        ))}
      </Box>

    </Box>
  );
}
//<Paper sx={{ width: "328px", height: "30px", top: "96px", left: "16px" }}>
