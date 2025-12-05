import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const ALL_CITIES_OPTION = "All";

function FilterBar({ city, onCityChange, onReset, availableCities }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        mb: 3,
        flexWrap: "wrap",
      }}
    >
      <TextField
        select
        label="City"
        size="small"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        sx={{ minWidth: 180 }}
      >
        <MenuItem value={ALL_CITIES_OPTION}>{ALL_CITIES_OPTION} cities</MenuItem>
        {availableCities.map((cityName) => (
          <MenuItem key={cityName} value={cityName}>
            {cityName}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="outlined" size="small" onClick={onReset}>
        Reset filters
      </Button>
    </Box>
  );
}

export { ALL_CITIES_OPTION };
export default FilterBar;
