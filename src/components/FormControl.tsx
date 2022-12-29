import { Alert } from "react-bootstrap";

// export default function FormControl(props) {
//   return (
//     <Alert className={props.class} variant={props.variant}>
//       {props.message}
//     </Alert>
//   );
// }
interface Props {
  message: string;
  variant: string;
  className: any;
}

export default function FormControl({ className, variant, message }: Props): JSX.Element {
  return (
    <Alert className={className} variant={variant}>
      {message}
    </Alert>
  );
}
