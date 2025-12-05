import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";

function InfoCard({ info }) {
    return (
      <Card
        sx={{
          width: "100%",
          pt: 2,
          pb: 6,
          height: 450,
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column", // stack content vertically
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 6,
            cursor: "pointer",
          },
        }}
        elevation={3}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexGrow: 1, // take all available vertical space
            gap: 2,
          }}
        >
          {/* Icon with uniform background */}
          <Box
            component="img"
            src={info.img}
            alt={info.title}
            sx={{
              width: 120,
              height: 120,
              p: 1.5,
              borderRadius: "50%",
              backgroundColor: "#eef2f7",
              objectFit: "contain",
            }}
          />
  
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {info.title}
          </Typography>
  
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: 240 }}
          >
            {info.description}
          </Typography>
  
          <Box sx={{ flexGrow: 1 }} /> {/* pushes button to bottom */}
  
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              borderRadius: 2,
              px: 3,
              py: 1,
              color: "#1976d2",
              borderColor: "#1976d2",
              backgroundColor: "white",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.1)",
                borderColor: "#115293",
              },
            }}
          >
            {info.buttonText}
          </Button>
        </CardContent>
      </Card>
    );
  }
  

export default InfoCard;
