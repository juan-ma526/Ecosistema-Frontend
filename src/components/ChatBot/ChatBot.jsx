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
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Message } from "./components/Message";
import { axiosClient } from "../../libs/network/axiosClient";
import { UserContext } from "../../context/userContext";
import { initialMessages } from "./data";
import "./ChatBot.css";

export const ChatBot = () => {
  const { user, token } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState(initialMessages);
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

        { sender: "usuario 2", text: "Su consulta fue enviada con exito" },
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

  return (
    <Box sx={{ position: "fixed", bottom: "0px", right: "0px", zIndex: 1000 }}>
      {!expanded && (
        /* Not expanded */
        <IconButton
          onClick={handleExpandClick}
          className="not-expanded-icon"
          sx={{
            backgroundColor: "customColors.violeta",
          }}
        >
          <ChatBubbleIcon />
        </IconButton>
      )}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* Body card */}
        <Card
          className="card-body"
          sx={{
            backgroundColor: "customColors.blanco",
          }}
        >
          {/* Box header with open chat */}
          <CardActions
            disableSpacing
            className="chat-header"
            sx={{
              borderColor: "customColors.violeta",
              backgroundColor: "customColors.violeta",
            }}
          >
            <IconButton sx={{ color: "customColors.blanco", gap: 1 }}>
              <SmartToyIcon />
              <Typography sx={{ fontWeight: 700 }}>Chatbot</Typography>
            </IconButton>
            <IconButton sx={{ color: "customColors.blanco" }} onClick={handleExpandClick}>
              <RemoveIcon />
            </IconButton>
          </CardActions>
          {/* Chat user 1 and user 2 */}

          <Box sx={{ padding: "16px", flexGrow: 1, overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <Message
                key={index}
                sender={msg.sender}
                text={msg.text}
                index={index}
                handleOptionClick={handleOptionClick}
              />
            ))}
            {/* Warning message */}
            {warning && (
              <Typography
                className="warning-msg"
                sx={{
                  backgroundColor: "customColors.rojo",
                }}
              >
                {warning}
              </Typography>
            )}
          </Box>
          {/* Input Box */}
          <Box className="input-chat-box">
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
            {/* Icon Box */}
            {user ? (
              <Box
                onClick={sendClick}
                className="icon-chat-box"
                sx={{
                  backgroundColor: "customColors.violeta",
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
