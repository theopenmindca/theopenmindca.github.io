import { Box, Divider, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const Contact = () => {
  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Box
        sx={{
          width: "50%",
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          m: 8,
        }}
      >
        <Typography variant="h3" sx={{ color: "black" }}>
          Contact
        </Typography>
      </Box>
      <Divider orientation="vertical" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 8,
          flexDirection: "column",
        }}
      >
        <Typography sx={{ textAlign: "justify", color: "black" }}>
          Luke offers counseling and psychotherapy services through telephone or
          internet teleconferencing. For individuals residing in areas lacking
          access to such services, this option becomes invaluable. Others opt
          for remote sessions due to travel constraints, geographical
          limitations, or busy schedules. Additionally, certain clients prefer
          the privacy and comfort of receiving therapy from the convenience of
          their homes or offices when working with Luke.
        </Typography>
        <Typography sx={{ mt: 2, display: "flex", color: "black" }}>
          <MailOutlineIcon />
          &nbsp;theopenmindcanada@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};
