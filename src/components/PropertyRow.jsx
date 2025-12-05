import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropertyCard from "./PropertyCard";

function PropertyRow({ title, description, properties }) {
  if (!properties?.length) return null;

  return (
    <Box sx={{px: 4, pt: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 800, pl: 1 }}>
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2, maxWidth: 480, pl: 1 }}
      >
        {description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 1,
          pl: 1,
          "& > *": {
            flex: "0 0 360px",
          },

          /* Hide scrollbar — cross-browser */
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          "&::-webkit-scrollbar": {
            display: "none", // Chrome/Safari/WebKit
          },
        }}
      >
        {properties.map((property) => (
          <Box key={property.id}>
            <PropertyCard property={property} />
          </Box>
        ))}
      </Box>
      
    </Box>
  );
}

export default PropertyRow;
