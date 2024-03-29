import { Alert } from "react-bootstrap";

export default function FetchError(props) {
  return (
    <Alert variant={props.variant}>
      <p>An error occured: {props.message}</p>
    </Alert>
  );
}
