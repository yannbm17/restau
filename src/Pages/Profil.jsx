import { Box, Grid, Button, TextField } from "@mui/material";
import React from "react";
import ProfilImage from "../Assets/images/icon-me.png";
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Link } from 'react-router-dom';
import "./Profil.css";

const Profil = () => {
  return (
    <Box className="element-profile-general">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className="profile-section">
          <img src={ProfilImage} className="Profil_img" alt="Profil" />
          <Box className="profile-details">
            <h1>Yann BM</h1>
            <h2>Web Developer</h2>
            <li><Link to="/Login" className="navbar-link">DECONNEXION</Link></li>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Section de Fidélité */}
          <Box className="fidelity-section">
            <h3><GroupAddIcon /> INFORMATIONS PERSONNELLES</h3>
            <Box component="form">
              <TextField fullWidth label="Nom complet" value="Yann BM" InputProps={{ readOnly: true }} variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Profession" value="Etudiant" InputProps={{ readOnly: true }} variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Recommandations" value="25" InputProps={{ readOnly: true }} variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Code de fidélité" value="252666633" InputProps={{ readOnly: true }} variant="outlined" sx={{ mb: 2 }} />
            </Box>
          </Box>

          {/* Section de Parrainage */}
          <Box className="parainage-section">
            <h3><LoyaltyIcon /> PARRAINAGE</h3>
            <Box component="form">
              <TextField fullWidth label="Code de parrainage" value="2250 15" InputProps={{ readOnly: true }} variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Nombre de parrainages" value="nombre" InputProps={{ readOnly: true }} variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Réduction" placeholder="Entrer réduction" variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" style={{ backgroundColor: "#000000", color: "#ffffff" }} fullWidth sx={{ mt: 2 }}>PARRAINE ET GAGNE</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <footer>
        <p>&copy; 2024 | miammiam</p>
      </footer>
    </Box>
  );
};

export default Profil;
