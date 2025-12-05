import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";

function formatPrice(price) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

function PropertyCard({ property }) {
  return (
    <Card sx={{ height: "100%" }} elevation={3}>
      <CardMedia
        component="img"
        height="180"
        image={property.imageUrl}
        alt={property.title}
      />
      <CardContent sx={{ pt: 0.5, pb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          C{formatPrice(property.price)}
        </Typography>

        <Typography variant="subtitle2" component="div">
          <strong>{property.beds}</strong> bd |{" "}
          <strong>{property.baths}</strong> ba |{" "}
          <strong>{property.sqft}</strong> sqft | Active
        </Typography>

        <Typography variant="subtitle2" component="div">
          {property.address}
        </Typography>

        <Typography variant="caption" component="div" color="text.secondary" sx={{fontSize: "0.7rem"}}>
          {property.listingId}, {property.agency}, {property.agent}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
