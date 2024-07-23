import { Typography } from "@mui/material";

function ProfileName() {
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
            Julieta Pérez
          </Typography>
      </section>
    </>
  );
}

export default ProfileName;
