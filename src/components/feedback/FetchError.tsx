// import { Component } from "react";
import { Alert } from "react-bootstrap";

interface Properties {
  variant: string;
  message: string;
}

export default function FetchError(props: Properties): JSX.Element {
  return (
    <Alert variant={props.variant}>
      <p>An error occured: {props.message}</p>
    </Alert>
  );
}

// const FetchError: React.FunctionComponent<Properties> = (props) => {
//   return (
//     <Alert variant={props.variant}>
//       <p>An error occured: {props.message}</p>
//     </Alert>
//   );
// };

// export default FetchError;
