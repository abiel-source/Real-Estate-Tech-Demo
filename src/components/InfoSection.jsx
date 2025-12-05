import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InfoCard from "./InfoCard";
import Box from "@mui/material/Box";
import BuyIcon from "../assets/buy.svg"
import RentIcon from "../assets/rent.svg"
import SellIcon from "../assets/sell.svg"

function InfoSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f5f7",
        py: 6,
        px: { xs: 2, md: 4 },
        my: 4,
        display: "grid",
        gap: 3,
        // Auto-fit cards while centering them in the row
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 360px))",
        justifyContent: "center",
      }}
    >
      <InfoCard
        info={{
          title: "Buy a home",
          description:
            "A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.",
          buttonText: "Find a local agent",
          img: BuyIcon
        }}
      />
      <InfoCard
        info={{
          title: "Sell a home",
          description:
            "No matter what path you take to sell your home, we can help you navigate a successful sale.",
          buttonText: "See your options",
          img: SellIcon
        }}
      />
      <InfoCard
        info={{
          title: "Rent a home",
          description:
            "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
          buttonText: "Find rentals",
          img: RentIcon
        }}
      />
    </Box>
  );
}

export default InfoSection;
