import { Spinner } from "react-bootstrap";

interface Properties {
  message: string;
}

export default function Loader(props: Properties): JSX.Element {
  return (
    <div className="loader-container">
      <Spinner />
      <div>{props.message}</div>
    </div>
  );
}
