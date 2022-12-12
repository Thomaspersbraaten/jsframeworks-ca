import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname;
  const splicedPath = path.split("/");
  if (path === "/") {
    return null;
  } else
    return (
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumbs__link" key="/">
          Home
        </Link>

        {splicedPath.map((path) => {
          // Hides breadcrumbs on homepage and removes the "detail" from breadcrumbs since its not a valid link
          if (path === "") return;
          if (path === "detail") return;
          let breakerCount = 0;
          return (
            <>
              <div className="breaker" key={breakerCount + 1}>
                /
              </div>
              <Link className="breadcrumbs__link" to={path} key={path}>
                {path}
              </Link>
            </>
          );
        })}
      </div>
    );
}
