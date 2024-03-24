import { Box } from "@mui/material";
import { Header } from "./Header";
import { Waterfall } from "./Waterfall";
import { Info } from "./Info";
import { BigInfo } from "./BigInfo";
import { Contact } from "./Contact";
import { Fees } from "./Fees";
const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <Waterfall />
      <Info />
      <BigInfo />
      <Fees />
      <Contact />
    </Box>
  );
};

export default App;
