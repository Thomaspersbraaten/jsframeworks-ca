import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname;
  const splicedPath = path.split("/");
  // console.log(splicedPath);
  if (path === "/") {
    return null;
  } else
    return (
      <Breadcrumb className="breadcrumbs">
        <BreadcrumbItem href="/" className="breadcrumb">
          Home
        </BreadcrumbItem>

        {splicedPath.map((path) => {
          if (path === "") return;
          return (
            <BreadcrumbItem href={path} key={path}>
              {path}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    );
}
