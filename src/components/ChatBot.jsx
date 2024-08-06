/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
import { axiosClient } from "../libs/network/axiosClient";
import { UserContext } from "../context/userContext";

export const ChatBot = () => {
  const { user, token } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { sender: "usuario 1", text: "1. ¿Tiene algún costo aparecer como proveedor en ECOS?" },
    { sender: "usuario 1", text: "2. ¿Cómo se decide qué categoría le corresponde al servicio/producto que brindo?" },
    {
      sender: "usuario 1",
      text: "3. Una vez que cargo mi producto/servicio, ¿aparezco inmediatamente en la plataforma?",
    },
    { sender: "usuario 1", text: "4. ¿Puedo editar mi producto/servicio después de subirlo?" },
    { sender: "usuario 1", text: "5. Siendo proveedor, ¿puedo cargar publicaciones sobre mi servicio/producto?" },
    {
      sender: "usuario 1",
      text: "6. ¿Puedo pagar para aparecer primero a todos los usuarios que visiten la plataforma?",
    },
    { sender: "usuario 1", text: "7. ¿Puedo cargar más de un producto o servicio?" },
  ]);
  const [warning, setWarning] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOptionClick = async (option) => {
    try {
      const response = await axiosClient.get(`/pregunta?preguntaId=${option}`);
      const data = response.data;
      setMessages((prevMessages) => [...prevMessages, { sender: "usuario 2", text: `${option}: ${data.titulo}` }]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "usuario 2", text: "Lo siento, ha ocurrido un error." },
      ]);
    }
  };
  const handleInputClick = async (question) => {
    try {
      await axiosClient.post(
        `/preguntar/usuario/${user.usuarioId}`,
        { titulo: question },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessages((prevMessages) => [
        ...prevMessages,

        { sender: "usuario 2", text: "Su consulta fue enviada con exito" }, // Reemplaza esto con la respuesta real
      ]);
      setWarning("");
    } catch (error) {
      console.log(error);
    }
    setInputValue("");
  };

  const sendClick = () => {
    if (inputValue.trim() !== "") {
      handleInputClick(inputValue);
    } else {
      setWarning("Por favor, escribe algo antes de enviar.");
    }
  };

  const Message = ({ sender, text, index }) => {
    return (
      <Box
        onClick={() => handleOptionClick(index + 1)}
        sx={{
          display: "flex",
          justifyContent: sender === "usuario 1" ? "flex-start" : "flex-end",
          mb: 1,
        }}
      >
        <Box
          sx={{
            cursor: sender === "usuario 1" ? "pointer" : "none",
            maxWidth: sender === "usuario 1" ? "100%" : "85%",
            padding: "8px 12px",
            borderRadius: "12px",
            textDecoration: sender === "usuario 1" ? "underline" : "none",
            backgroundColor: sender === "usuario 1" ? "customColors.grisMedio" : "customColors.violeta",
            color: sender === "usuario 1" ? "customColors.violeta" : "white",
          }}
        >
          <Typography>{text}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ position: "fixed", bottom: "0px", right: "0px", zIndex: 1000 }}>
      {!expanded && (
        <IconButton
          onClick={handleExpandClick}
          sx={{
            backgroundColor: "customColors.violeta",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
            },
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
        >
          <ChatBubbleIcon />
        </IconButton>
      )}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Card
          sx={{
            width: "390px",
            height: "650px",
            position: "fixed",
            bottom: "0px",
            right: "0px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "customColors.blanco",
          }}
        >
          <CardActions
            disableSpacing
            sx={{
              display: "flex",
              justifyContent: "end",
              padding: "8px",
              borderBottom: 1,
              borderColor: "customColors.violeta",
              gap: 6,
              backgroundColor: "customColors.violeta",
            }}
          >
            <IconButton sx={{ color: "customColors.blanco" }} onClick={handleExpandClick}>
              <RemoveIcon />
            </IconButton>
          </CardActions>
          <Box sx={{ padding: "16px", flexGrow: 1, overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <Message key={index} sender={msg.sender} text={msg.text} index={index} />
            ))}
            {warning && (
              <Typography
                sx={{
                  maxWidth: "100%",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  backgroundColor: "customColors.rojo",
                  fontWeight: 600,
                  color: "white",
                  mt: 2,
                }}
              >
                {warning}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              padding: "8px",
              borderTop: "1px solid #e0e0e0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
            }}
          >
            {user ? (
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="Escribe un mensaje..."
                style={{ width: "95%", padding: "8px", borderRadius: "4px", border: "1px solid #4E169D" }}
              />
            ) : (
              ""
            )}
            {user ? (
              <Box
                onClick={sendClick}
                sx={{
                  backgroundColor: "customColors.violeta",
                  width: "48px",
                  height: "32px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <SendIcon />
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Card>
      </Collapse>
    </Box>
  );
};
