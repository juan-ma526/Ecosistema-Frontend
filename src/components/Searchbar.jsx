import { useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, List, ListItem, ListItemText, Typography } from "@mui/material";
import "./searchbar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setError(null);
    setNoResults(false);

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();

      if (data.items.length === 0) {
        setNoResults(true);
      } else {
        setResults(data.items);
      }

      // OJO aca... no se si hay que limpiar la searchbar post busqueda:
      setQuery("");
    } catch (error) {
      setError("Hubo un problema con la búsqueda. Intentalo de nuevo.");
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
          borderRadius: 100,
        }}
      >
        <IconButton type="submit" sx={{ p: "16px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <TextField
          id="filled-hidden-label-normal"
          variant="standard"
          color="primary"
          placeholder="Buscar Proovedores"
          value={query}
          onChange={handleInputChange}
        />
      </Paper>

      {error && <Typography color="error">{error}</Typography>}
      {noResults && <Typography>No se encontraron resultados.</Typography>}

      <List>
        {results.map((result, index) => (
          <ListItem key={index}>
            <ListItemText primary={result.login} secondary={result.html_url} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
