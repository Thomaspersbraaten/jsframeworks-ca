import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Heading from "../../Heading";
import LogoutModal from "./LogoutModal";

function Admin() {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  function startLogout() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "flex";
    const cancelButton = document.querySelector(".cancel");
    const confirmButton = document.querySelector(".confirm");
    cancelButton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });
    confirmButton.addEventListener("click", () => {
      setAuth(null);
      navigate("/");
    });
  }
  return (
    <>
      <Heading size="1">Admin</Heading>
      <Heading size="2">Welcome, You are logged in as {auth.user_display_name}</Heading>
      <Button onClick={startLogout}>Logout</Button>
      <LogoutModal />
    </>
  );
}

export default Admin;
