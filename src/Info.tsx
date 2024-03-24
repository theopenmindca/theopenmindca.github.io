import { Box, Divider, Typography } from "@mui/material";

export const Info = () => {
  return (
    <Box sx={{ display: "flex", backgroundColor: "black" }}>
      <Box
        sx={{
          width: "50%",
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          m: 8,
        }}
      >
        <Typography variant="h3" sx={{ color: "white" }}>
          The Open Mind
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 8,
        }}
      >
        <Typography sx={{ color: "white", textAlign: "justify" }}>
          In sessions with Luke, you'll find an environment characterized by
          confidentiality, respect, understanding, and insight. Recognizing the
          uniqueness and creativity of each individual, Luke's approach is
          collaborative, tailored to your specific needs, life challenges, and
          aspirations.
        </Typography>
      </Box>
    </Box>
  );
};
