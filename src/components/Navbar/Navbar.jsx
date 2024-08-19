import LogoImg from "../Navbar/images/logoNavbar.png";
import "./Navbar.css";
import { Box, AppBar, Drawer, IconButton, List, Toolbar } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState, useEffect } from "react";
import { ItemList } from "./components/ItemList";
import { UserOut } from "./components/UserOut";
import { UserIn } from "./components/UserIn";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

const drawerWidth = 258;
const drawerItems = [
  { item: "Inicio", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/" },
  { item: "Proveedores", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/providers/" },
  { item: "Publicaciones", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/publications" },
  { item: "Iniciá sesión", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/auth/login" },
  {
    item: "Querés formar parte de la Red de impacto ECO como Proveedor?",
    fontWeight: 400,
    fontSize: 18,
    fontStyle: "italic",
  },
  { item: "Registrate", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/auth/register" },
];
const drawerItemsAdmin = [
  { item: "Administrador", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/" },
  { item: "Dashboard Administrador", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/dashboard" },
  { item: "Proveedores", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/adminProviders/" },
  { item: "Publicaciones", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/adminPublications" },
];
const drawerItemsUsuario = [
  { item: "Inicio", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/" },
  { item: "Proveedores", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/providers/" },
  { item: "Publicaciones", fontWeight: 700, fontSize: 18, fontStyle: "normal", path: "/publications" },
  {
    item: "Querés formar parte de la Red de impacto ECO como Proveedor?",
    fontWeight: 400,
    fontSize: 18,
    fontStyle: "italic",
  },
];

function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  useEffect(() => {
    if (user != null && user.roles == "ADMIN") {
      setData(drawerItemsAdmin);
    } else {
      if (user != null) {
        setData(drawerItemsUsuario);
      } else {
        setData(drawerItems);
      }
    }
  }, [user]);

  /* Menu Sidebar */
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100%",
        backgroundColor: "customColors.violeta",
        textAlign: "center",
        color: "customColors.blanco",
      }}
    >
      {/* Items Sidebar */}
      <List>
        {data.map((object) => (
          <ItemList
            item={object.item}
            fontSize={object.fontSize}
            fontStyle={object.fontStyle}
            fontWeight={object.fontWeight}
            key={object.item}
            path={object.path}
          />
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    /* Navbar Container */
    <Box sx={{ display: "flex", marginBottom: 7 }}>
      <AppBar sx={{ backgroundColor: "customColors.blanco" }} component="nav">
        {/* Navbar Components, icon, logo, perfil */}

        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "customColors.negro", fontWeight: 600, mr: 2, display: { sm: "none" } }}
          >
            {mobileOpen ? <CloseOutlinedIcon /> : <MenuIcon />}
          </IconButton>

          {/* Box Logo */}
          <Link to="/" className="link-tag">
            <Box sx={{ width: "152px", height: "56px" }}>
              <img src={LogoImg} alt="Logo Empresa" style={{ objectFit: "cover", height: "95%", width: "100%" }} />
            </Box>
          </Link>

          {/* Profile */}

          {user ? <UserIn name={user.nombre} email={user.email} /> : <UserOut />}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
