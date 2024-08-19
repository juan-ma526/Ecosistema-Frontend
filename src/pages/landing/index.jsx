import { Box, Button, Typography } from "@mui/material";
import { InvitationRedImpacto } from "../../components/InvitationRedImpacto";
import { HomeTitle } from "./components/HomeTitle/HomeTitle";
import ImpactCompanies from "./components/ImpactCompanies/ImpactCompanies";
import { PublicationsCard } from "../../components/Publications/PublicationsCard";
import { Link } from "react-router-dom";
import { Category } from "./components/Category/Category";
import ProvidersHomes from "./components/ProvidersHome/ProvidersHome";
import { ChatBot } from "../../components/ChatBot/ChatBot";
import { axiosClient } from "../../libs/network/axiosClient";
import { useEffect, useState } from "react";
import { transformPublications } from "./lib/transformPublications";

export default function HomePage() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    try {
      const getPublications = async () => {
        const response = await axiosClient.get("/publicaciones/activas");
        const data = response.data;
        setPublications(data);
      };
      getPublications();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const transformPubli = transformPublications(publications);

  return (
    <div>
      <HomeTitle />
      <ImpactCompanies />
      <InvitationRedImpacto />
      <Box sx={{ marginTop: "48px" }}>
        <Typography sx={{ fontWeight: 600, marginLeft: "18px" }}>Recomendaciones para vos</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: "22px", marginLeft: "18px" }}>Proveedores ECO</Typography>
      </Box>
      <ProvidersHomes />

      <Category />

      <Box sx={{ marginTop: "48px" }}>
        <Typography sx={{ fontWeight: 600, marginLeft: "18px" }}>Publicaciones</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: "22px", marginLeft: "18px" }}>
          Impulsando transformaciones
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "22px" }}>
        {transformPubli.map((item, index) => (
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
      <Link to="/publications" sx={{ display: "flex", alignItems: "center", justifyItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              textTransform: "none",
              display: "flex",
              width: "152px",
              height: "40px",
              padding: "10px 8px 10px 8px",
              borderRadius: "100px",
              backgroundColor: "customColors.violeta",
              color: "customColors.blanco",
              margin: "18px 0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>Ir a Publicaciones</Typography>
          </Button>
        </Box>
      </Link>
      <ChatBot />
    </div>
  );
}
