import * as React from "react";
import Link from "react-router-dom/es/Link";

interface IBreadcrumb {
  currentBreadcrumbs: any[];
}

/* breadcrumbs = [{
  children: "Home",
  path: "/",
}]
*/

const styles: React.CSSProperties = {};

const Breadcrumbs: React.SFC<IBreadcrumb> = ({ currentBreadcrumbs }) => (
  <div className="breadcrumb">
    <ul>
      {currentBreadcrumbs.map((e: any, i) => (
        <Link key={`breadcrumb-${i}`} to={e.path} onClick={c => i === currentBreadcrumbs.length - 1 && c.preventDefault()}>
          {e.children}{i !== currentBreadcrumbs.length - 1 && "   / "}
        </Link>
      ))}
    </ul>
  </div>
);

export default Breadcrumbs;
