
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/city/${encodeURIComponent(trimmed)}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "300px", md: "480px" },
        display: "flex",
        alignItems: "center",
        color: "#fff",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
          url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 700, mb: 2, maxWidth: "600px" }}
        >
          Find your next home across Canada.
        </Typography>

        {/* Search bar (same spot as your old h6) */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: "500px",
            mt: 2,
            background: "#fff",
            borderRadius: "50px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Try searching Vancouver, Toronto, Cardiff, Mumbai"
            variant="outlined"
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                backgroundColor: "#fff",
                pl: 2,
              },
              "& fieldset": { border: "none" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
