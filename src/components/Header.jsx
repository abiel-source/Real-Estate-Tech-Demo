import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Logo from "../assets/logo.jpg";

function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "white" }}
    >
      <Toolbar
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          px: { xs: 2, md: 4 },
          minHeight: 72,
        }}
      >
        {/* Left Subheader */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography variant="body1">Buy</Typography>
          <Typography variant="body1">Rent</Typography>
          <Typography variant="body1">Sell</Typography>
          <Typography variant="body1">Advertise</Typography>
        </Box>

        {/* Centered Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: 32, height: 32 }}
          />
          <Typography variant="h5" component="div" sx={{ fontWeight: 800 }}>
            EstateTech
          </Typography>
        </Box>

        {/* Right Subheader */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="body1">Get an agent</Typography>
          <Typography variant="body1">Get help</Typography>
          <Typography variant="body1">Sign in</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
