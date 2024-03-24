import { Box, Divider, Typography } from "@mui/material";
import { Category } from "./Category";

export const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography>Luke Hart. M. A., BSc (HONS)., R. P.</Typography>
      </Box>
      {/* <Box sx={{ display: "flex" }}>
        <Category name="Home" link="#cat" />
        <Divider orientation="vertical" />
        <Category name="Fees" link="#cat" />
        <Divider orientation="vertical" />
        <Category name="Contact" link="#cat" />
      </Box> */}
    </Box>
  );
};
