import { Button } from "react-bootstrap";
import Heading from "../../Heading";

export default function LogoutModal() {
  return (
    <div className="modal-container">
      <div className="modal-inner">
        <Heading size="3">Are you sure you want to logout?</Heading>
        <div className="modal-buttons">
          <Button variant="primary confirm">Confirm logout</Button>
          <Button variant="secondary cancel">Cancel logout</Button>
        </div>
      </div>
    </div>
  );
}
