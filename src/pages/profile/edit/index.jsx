// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box } from "@mui/material";
import EditTitle from "./components/EditTitle";
import EditSubtitle from "./components/EditSubtitle";
import "./edit.css";
import Form from "./components/Form";
import ButtonCharge from "../components/ButtonCharge";
import StandardImageList from "./components/ImageList";

export default function EditPublication() {
  return (
    <Box>
      <section className="titles">
        <EditTitle />
        <EditSubtitle />
      </section>
      <Form />
      <StandardImageList />
      <ButtonCharge sx={{ marginTop: "40px", top: "-18px"}}/>
    </Box>
  );
}
//<Paper sx={{ width: "328px", height: "30px", top: "96px", left: "16px" }}>
//top: "-140px",
