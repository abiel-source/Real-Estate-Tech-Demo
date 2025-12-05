import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  if (!properties.length) {
    return (
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        No properties match your filters.
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {properties.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
          <PropertyCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PropertyList;
