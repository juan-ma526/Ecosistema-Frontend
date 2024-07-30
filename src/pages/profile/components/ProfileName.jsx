import { Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

function ProfileName() {
  const { user } = useContext(UserContext);

  return (
    <>
      <section className="container">
        <Typography
          variant="h1"
          sx={{
            color: "customColors.negro",
            fontWeight: 700,
            fontSize: 28,
            lineHeight: "30px",
            textAlign: "center",
            marginTop: "100px"
          }}
        >
          {user ? `${user.nombre}, ${user.apellido} ` : 'Julieta Perez'}
        </Typography>
      </section>
    </>
  );
}

export default ProfileName;

//${user.apellido}

