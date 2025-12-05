// CityMapPage.jsx
import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";

import PropertyCard from "./PropertyCard";
import { PROPERTIES } from "../data/properties";

// Hardcoded city -> coordinates map
const CITY_COORDS = {
  vancouver: { lat: 49.2827, lng: -123.1207 },
  toronto: { lat: 43.6532, lng: -79.3832 },
  montreal: { lat: 45.5017, lng: -73.5673 },
  calgary: { lat: 51.0447, lng: -114.0719 },
  ottawa: { lat: 45.4215, lng: -75.6972 },
  cardiff: { lat: 51.4816, lng: -3.1791 },
  mumbai: { lat: 19.0761, lng: 72.8774 },
};

function getCityCenter(cityName) {
  if (!cityName) return CITY_COORDS.vancouver;
  const key = cityName.toLowerCase();
  return CITY_COORDS[key] || CITY_COORDS.vancouver;
}

// Generate random markers around city center (for map only)
function generateRandomPins(center, count = 10) {
  const pins = [];
  for (let i = 0; i < count; i++) {
    const latOffset = (Math.random() - 0.5) * 0.02;
    const lngOffset = (Math.random() - 0.5) * 0.02;
    pins.push({
      id: i,
      lat: center.lat + latOffset,
      lng: center.lng + lngOffset,
      price: `$${(600000 + Math.random() * 400000).toLocaleString("en-CA")}`,
      beds: 2 + Math.floor(Math.random() * 3),
      baths: 1 + Math.floor(Math.random() * 2),
    });
  }
  return pins;
}

function CityMapPage() {
  const { cityName } = useParams();

  // ===================================================
  const navigate = useNavigate();
  // ===================================================

  const center = useMemo(() => getCityCenter(cityName), [cityName]);
  const pins = useMemo(() => generateRandomPins(center, 10), [center]);

  const displayCity =
    cityName && cityName.length > 0
      ? decodeURIComponent(cityName)
      : "Vancouver";

  // ===================================================
  const [cityInput, setCityInput] = useState(displayCity);

  const handleApply = () => {
    const trimmed = cityInput.trim();
    if (!trimmed) return;
    navigate(`/city/${encodeURIComponent(trimmed)}`);
  };
  // ===================================================

  return (
    <>
      <CssBaseline />

      {/* Top-level wrapper: full viewport height, no outer scroll */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f5f5",
          overflow: "hidden",
        }}
      >
        {/* Header stays at top, takes natural height */}
        <Header />

        {/* Main content fills remaining height */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            px: 0,
            py: 0,
            overflow: "hidden",
          }}
        >
          {/* Top Filter bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              py: 1,
              px: 1,
              backgroundColor: "white",
              borderTop: "1px solid #e0e0e0",
              borderBottom: "1px solid #e0e0e0",
              flexShrink: 0, // prevent shrinking
            }}
          >
            {/* City Search Field */}
            <TextField
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                minWidth: 160,
                "& .MuiOutlinedInput-root": { borderRadius: "50px" },
              }}
            />

            {/* Dropdown Filters */}
            {[1, 2, 3, 4].map((n) => (
              <TextField
                key={n}
                select
                defaultValue=""
                label={`Filter ${n}`}
                size="small"
                sx={{
                  minWidth: 120,
                  "& .MuiOutlinedInput-root": { borderRadius: "50px" },
                }}
                SelectProps={{ native: true }}
              >
                <option value=""></option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option2">Option 3</option>
                <option value="option2">Option 4</option>
                <option value="option2">Option 5</option>
              </TextField>
            ))}

            {/* Apply Button */}
            <Button
              variant="contained"
              onClick={handleApply} // barebones navigate
              sx={{
                height: 40,
                borderRadius: "50px",
                px: 3,
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Apply
            </Button>

            {/* Home Button */}
            <Button
              component={Link}
              to="/"
              variant="outlined"
              sx={{
                height: 40,
                borderRadius: "50px",
                px: 3,
                fontWeight: 600,
                textTransform: "none",
                color: "#1976d2", // ensure consistent base color

                "&:hover": {
                  color: "#1976d2", // prevent purple when hovered
                  borderColor: "#115293",
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                  textDecoration: "none", // removes underline flash
                },

                "&:visited": {
                  color: "#1976d2", // prevent purple link after clicking
                },

                "&:focus": {
                  color: "#1976d2",
                },
              }}
            >
              Home
            </Button>
          </Box>

          {/* Main content: map (left) + scrollable grid (right) */}
          <Box
            sx={{
              display: "flex",
              gap: 0,
              flex: 1, // fill remaining vertical space
              overflow: "hidden",
            }}
          >
            {/* LEFT: Map */}
            <Box
              sx={{
                flex: "1 1 50%",
                borderRadius: 0,
                overflow: "hidden",
                boxShadow: 3,
                backgroundColor: "#fff",
              }}
            >
              <MapContainer
                key={displayCity}
                center={[center.lat, center.lng]}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />

                {pins.map((pin) => (
                  <CircleMarker
                    key={pin.id}
                    center={[pin.lat, pin.lng]}
                    radius={8}
                  >
                    <Popup>
                      <div>
                        <strong>{pin.price}</strong>
                        <br />
                        {pin.beds} bd · {pin.baths} ba
                        <br />
                        Near {displayCity}
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>
            </Box>

            {/* RIGHT: Scrollable list using PROPERTIES */}
            <Box
              sx={{
                flex: "1 1 50%",
                borderRadius: 0,
                boxShadow: 3,
                backgroundColor: "#fff",
                p: 2,
                overflowY: "auto", // this scrolls
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  // children = the card wrappers
                  "& > *": {
                    // 1 per row on extra-small screens
                    flex: "1 1 100%",
                    // 2 per row on small+ (>=600px)
                    "@media (min-width:600px)": {
                      flex: "1 1 calc(50% - 8px)", // 2 columns, accounting for gap
                    },
                  },
                }}
              >
                {PROPERTIES.filter(
                  (property) => property.city == displayCity
                ).map((property) => (
                  <Box key={property.id}>
                    <PropertyCard property={property} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CityMapPage;
