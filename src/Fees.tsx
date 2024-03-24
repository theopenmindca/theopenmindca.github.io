import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Fees = () => {
  return (
    <Box sx={{ display: "flex", backgroundColor: "black" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 8,
        }}
      >
        <Typography sx={{ textAlign: "justify", color: "white" }}>
          Costs for psychological services, counseling, and psychotherapy
          typically aren't included in government health plans. However, your
          employer benefit package, employee assistance program (EAP), or
          private insurance policy may cover these fees. Additionally, sliding
          scale payment options are available. Sessions are scheduled for 50
          minutes, with a fee of $170 per hour (plus applicable HST).
        </Typography>
      </Box>
      <Divider orientation="vertical" />
      <Box
        sx={{
          width: "50%",
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          m: 8,
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            mt: 2,
            color: "white",
            display: "flex",
          }}
        >
          <Typography variant="h3" sx={{ color: "white" }}>
            Fees
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
