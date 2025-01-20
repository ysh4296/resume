import { Link } from "@mui/material";

const NavigationLink = ({ href, children }) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};

export default NavigationLink;
