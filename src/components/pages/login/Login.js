import { useEffect } from "react";
import Heading from "../../Heading";
import LoginForm from "./form/LoginForm";

export default function Login() {
  useEffect(() => {
    document.title = "Envposts | Login page";
  }, []);
  return (
    <>
      <Heading size="1">Login</Heading>
      <LoginForm />
    </>
  );
}
