/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { useState } from "react";
import ProviderCardMedia from "../../../../providers/components/ProviderCardMedia";
import ProviderCardHeaderMin from "../../../../providers/components/ProviderCardHeaderMin";
import ProviderCardDescription from "../../../../providers/components/ProviderCardDescription";
import ProviderCardSocialNets from "../../../../providers/components/ProviderCardSocialNets";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import "./MiniCardProviders.css";

function MiniCardProvider(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Card className="MiniCardStyles" sx={{ backgroundColor: "customColors.grisClaro" }}>
      <Box sx={{ margin: "0px 5px" }} onClick={handleOpen}>
        <Box sx={{ textAlign: "-webkit-right" }}>
          <ProviderCardHeaderMin category={props.category} estiloHeader="MiniCardHeaderStyles" />
          <img className="miniImagen" src={props.image} alt="imagen principal" />
        </Box>
        <ProviderCardMedia
          className="MiniCardMediaStyles"
          nameProvider={props.nameProvider}
          typeProvider={props.typeProvider}
          ciudad={props.ciudad}
          mini={true}
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "250px", padding: "16px 10px", backgroundColor: "customColors.grisClaro" }}>
          <Box>
            <Box sx={{ textAlign: "-webkit-right" }}>
              <ProviderCardHeaderMin category={props.category} estiloHeader="cardHeaderStyles" />
              <Box sx={{ width: "220px", textAlign: "center" }}>
                <img
                  src={props.image}
                  alt="imagen principal"
                  style={{ width: "100%", borderRadius: "16px", height: "90px" }}
                />
              </Box>
            </Box>
            <ProviderCardMedia
              nameProvider={props.nameProvider}
              typeProvider={props.typeProvider}
              ciudad={props.ciudad}
              provincia={props.provincia}
              pais={props.pais}
              mini={false}
              modal={true}
            />
            <CardContent sx={{ padding: "5px", marginTop: "36px" }}>
              <ProviderCardDescription
                description={props.description}
                marginBottomDescription="4px"
                fontSizeDescription="14px"
              />
              <ProviderCardSocialNets
                fontSizeSocialNets="11px"
                email={props.email}
                facebook={props.facebook}
                instagram={props.instagram}
                telefono={props.telefono}
              />
            </CardContent>
          </Box>
        </Box>
      </Modal>
    </Card>
  );
}

export default MiniCardProvider;
