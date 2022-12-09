import { Alert } from "react-bootstrap";

export default function FetchError(props) {
  return <Alert variant={props.variant}>An error occured: {props.message}</Alert>;
}
