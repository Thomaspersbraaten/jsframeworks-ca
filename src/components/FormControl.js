import { Alert } from "react-bootstrap";

// export default function FormControl(props) {
//   return (
//     <Alert className={props.class} variant={props.variant}>
//       {props.message}
//     </Alert>
//   );
// }

export default function FormControl({ className, variant, message }) {
  return (
    <Alert className={className} variant={variant}>
      {message}
    </Alert>
  );
}
