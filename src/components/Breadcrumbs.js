import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname;
  let breakerCount = 0;
  const splicedPath = path.split("/");
  if (path === "/") {
    return null;
  } else
    return (
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumbs__link" key="home">
          <i className="fas fa-home" key="fa-home"></i> Home
        </Link>

        {splicedPath.map((path) => {
          breakerCount++;
          // Hides breadcrumbs on homepage and removes the "detail" from breadcrumbs since its not a valid link
          if (path === "") return;
          if (path === "detail") return;

          console.log(path);
          return (
            <div key={breakerCount} className="crumb">
              <div className="breaker">/</div>
              <div className="breadcrumbs__link breadcrumbs__active">{path}</div>
            </div>
          );
        })}
      </div>
    );
}
