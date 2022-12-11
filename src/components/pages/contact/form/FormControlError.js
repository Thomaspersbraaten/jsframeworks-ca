import { Alert } from "react-bootstrap";

export default function FormControlError(props) {
  //   return (
  //     <Alert className="input-error" variant={props.variant}>
  //       {props.message}
  //     </Alert>
  //   );
  return (
    <Alert className={props.class} variant={props.variant}>
      {props.message}
    </Alert>
  );
}
