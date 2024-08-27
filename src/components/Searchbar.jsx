import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import "./searchbar.css";

// eslint-disable-next-line react/prop-types
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const route = '/findProviders/' + query;
      navigate(route);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="searchbar-container">
      <Paper
        component="form"
        onSubmit={handleSearch}
        sx={{
          p: "0px 16px 0px 16px",
          display: "flex",
          alignItems: "center",
          width: 328,
          height: 56,
          borderRadius: 100
        }}
      >
        <IconButton type="submit" sx={{ p: "16px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <TextField
          id="filled-hidden-label-normal"
          variant="standard"
          color="primary"
          placeholder="Buscar Proveedores"
          value={query}
          onChange={handleInputChange}
        />
      </Paper>
    </div>
  );
}
