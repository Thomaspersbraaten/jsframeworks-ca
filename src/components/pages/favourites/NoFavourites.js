import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NoFavourites({ variant }) {
  return (
    <Alert variant={variant} className="no-favourites">
      <div>You currently have no favourite posts.</div>
      <div className="no-favourites__to-home">
        Please check out our <Link to="/"> home page</Link>
      </div>
    </Alert>
  );
}
