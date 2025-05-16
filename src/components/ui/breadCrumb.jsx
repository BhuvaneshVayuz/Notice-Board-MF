import { Breadcrumbs, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const BreadCrumbCustom = ({ links = [], pageTitle }) => {
  const navigate = useNavigate()

  const navigateGlobal = window.navigateGlobal
  return (
    <>
      {/* <Box> */}
      <Breadcrumbs aria-label="breadcrumb">
        {links.map(({ label, to, global }, index) => (
          <>
            <button onClick={() => {
              console.log(global, to, 'wowow');
              if (global) {
                navigateGlobal(to)
              } else {
                navigate(to)
              }
            }
            }>{label}</button>
            {/* <Link
            key={index}
            to={to}
            style={{ textDecoration: "none", color: "inherit" }}
            >
            {label}
            </Link> */}
          </>
        ))}
        <Typography sx={{ color: "text.primary" }}>{pageTitle}</Typography>
      </Breadcrumbs>
      <Typography fontSize={24} sx={{ color: "text.primary" }}>
        {pageTitle}
      </Typography>
      {/* </Box> */}
    </>
  );
};
