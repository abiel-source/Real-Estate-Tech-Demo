import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box sx={{ py: 3, mt: 6, borderTop: "1px solid #eee" }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} MapleHomes · Built as a prototype real estate
        experience for Canadian buyers, sellers, and investors.
      </Typography>
    </Box>
  );
}

export default Footer;
