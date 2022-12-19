import { Spinner } from "react-bootstrap";

export default function Loader(props) {
  return (
    <div className="loader-container">
      <Spinner />
      <div>{props.message}</div>
    </div>
  );
}
