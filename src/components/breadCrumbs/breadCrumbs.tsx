import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { useMenu } from "../../pages/menu/context/MenuProvider";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const { menuItems } = useMenu();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const getBreadcrumbPath = (pathnames: string[]): string[] => {
    const result: string[] = [];
    let currentItems = menuItems;

    for (const pathname of pathnames) {
      const item = currentItems.find((item) => item.screenId === pathname);
      if (item) {
        result.push(item.menuName);
        currentItems = item.children || [];
      } else {
        result.push(pathname);
      }
    }

    return result;
  };

  const breadcrumbPath = getBreadcrumbPath(pathnames);
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon color="primary" fontSize="small" />}
    >
      {breadcrumbPath.map((name, index) => {
        const last = index === breadcrumbPath.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return last ? (
          <Typography color="text.primary" key={to}>
            {name.startsWith("Edit")
              ? "Edit"
              : name.startsWith("Add")
              ? "Add"
              : name}
          </Typography>
        ) : (
          <Link component={RouterLink} to={to} key={to}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
