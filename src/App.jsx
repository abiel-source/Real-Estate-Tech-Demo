// src/App.jsx
import { useMemo, useState } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FilterBar, { ALL_CITIES_OPTION } from "./components/FilterBar";
import PropertyList from "./components/PropertyList";
import Footer from "./components/Footer";
import PropertyRow from "./components/PropertyRow";
import InfoCard from "./components/InfoCard";
import InfoSection from "./components/InfoSection";
import { PROPERTIES } from "./data/properties";

function App() {
  const [selectedCity, setSelectedCity] = useState(ALL_CITIES_OPTION);

  const availableCities = useMemo(() => {
    const cities = new Set(PROPERTIES.map((p) => p.city));
    return Array.from(cities);
  }, []);

  const filteredProperties = useMemo(() => {
    if (selectedCity === ALL_CITIES_OPTION) {
      return PROPERTIES;
    }
    return PROPERTIES.filter((p) => p.city === selectedCity);
  }, [selectedCity]);

  const handleResetFilters = () => {
    setSelectedCity(ALL_CITIES_OPTION);
  };

  // randomization utility function
  // javascript does not have a built in shuffler
  function shuffleArray(array) {
    const shuffledArray = [...array]
    for (let i = array.length - 1; i > 0; i--) {  
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Hero />
      
      {/* filter by Toronto */}
      <PropertyRow
        title="Trending homes in Toronto, ON"
        description="Viewed the most in the past 24 hours"
        properties={shuffleArray(PROPERTIES.filter((property) => property.city == "Toronto"))}
      />

      {/* randomize and select 8 random properties */}
      <PropertyRow
        title="Recommended for you"
        description="Discover estate solutions tailored to you"
        properties={shuffleArray(PROPERTIES).slice(-8)}
      />

      <InfoSection></InfoSection>

      {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <FilterBar
          city={selectedCity}
          onCityChange={setSelectedCity}
          onReset={handleResetFilters}
          availableCities={availableCities}
        />
        <Box sx={{ mt: 2 }}>
          <PropertyList properties={filteredProperties} />
        </Box>
      </Container> */}

      <Footer />
    </>
  );
}

export default App;
