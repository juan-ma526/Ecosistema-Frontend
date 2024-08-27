import "./Publications.css";
import { Box } from "@mui/material";
import { PublicationsTitle } from "./components/PublicationsTitle";
import { PublicationsCard } from "../../components/Publications/PublicationsCard";
import { useEffect, useState } from "react";
import { axiosClient } from "../../libs/network/axiosClient";
import { transformPublications } from "../landing/lib/transformPublications";

export default function PublicationsPage() {
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
    /* Container Publications gral */
    <Box>
      {/* Home publications title */}
      <PublicationsTitle />
      {/* Container Publications Cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }} className="container-publications-cards">
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
    </Box>
  );
}
