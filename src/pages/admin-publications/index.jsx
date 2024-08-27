import { Box, Button, Typography } from "@mui/material";
import { PublicationsCard } from "../../components/Publications/PublicationsCard";
import { useContext, useEffect, useState } from "react";
import { axiosClient } from "../../libs/network/axiosClient";
import { transformPublications } from "../landing/lib/transformPublications";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

export default function AdminPublications() {
  const [publications, setPublications] = useState([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (!token) return;
    try {
      const getAllPublications = async () => {
        const response = await axiosClient.get("/publicaciones", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = response.data;
        setPublications(data);
      };
      getAllPublications();
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const transformPubli = transformPublications(publications);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "customColors.blanco",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "customColors.negro",
          fontSize: "28px",
          lineHeight: "35px",
          fontWeight: 600,
          textAlign: "center",
          marginTop: "52px",
        }}
      >
        Publicaciones
      </Typography>
      <Link to="/admin/createPublication">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "customColors.violeta",
            borderRadius: "100px",
            textTransform: "none",
            marginTop: "22px",
            width: "328px",
            height: "40px",
            ":active": {
              backgroundColor: "#6E20DB",
            },
            ":hover": {
              backgroundColor: "#6E20DB",
            },
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Crear publicacíon</Typography>
        </Button>
      </Link>
      <Typography
        variant="h2"
        sx={{
          color: "customColors.negro",
          fontSize: "22px",
          lineHeight: "30px",
          fontWeight: 600,
          textAlign: "center",
          marginTop: "42px",
          marginBottom: "22px",
        }}
      >
        Publicaciones cargadas
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "52px" }}>
        {transformPubli.map((item, index) => (
          /* Card */
          <PublicationsCard
            item={item}
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
