import { useEffect } from "react";
import Heading from "../../Heading";
import ContactForm from "./form/ContactForm";

function Contact() {
  useEffect(() => {
    document.title = "Envposts | Contact us";
  }, []);
  return (
    <>
      <Heading size="1">Contact</Heading>
      <ContactForm />
    </>
  );
}

export default Contact;
