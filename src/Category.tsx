import { Link } from "@mui/material";
import { Box } from "@mui/system";

interface IProps {
  name: string;
  link: string;
}
export const Category = ({ name, link }: IProps) => {
  return (
    <Box sx={{ px: 4, py: 2 }}>
      <Link href={link} sx={{ color: "black" }}>
        {name}
      </Link>
    </Box>
  );
};
