import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Heading from "../../../Heading";
import FormControlError from "./FormControlError";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [contactError, setContactError] = useState(false);
  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const options = ["suggestions", "support"];

  const schema = yup.object().shape({
    firstName: yup.string().trim().required("First name is required").min(3, "Firstname must be minimum 3 characters long"),
    lastName: yup.string().trim().required("Last name is required").min(4, "Last name must be minimum 4 characters long"),
    email: yup.string().required("Email is required").matches(emailregex, "Must be a valid email"),
    subject: yup.string().required("Please select a subject").oneOf(options, "please select a subject"),
    // subject: yup.object().shape({
    //   label: yup.string().required("required"),
    //   value: yup.string().required("required").nullable(),
    // }),
    message: yup.string().trim().required("You must write a message").min(10, "The message must be at least 10 characters long"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function sendContactForm(data) {
    console.log(data);
    setSubmitting(true);
    // setContactError(true);
  }

  return (
    <Form onSubmit={handleSubmit(sendContactForm)}>
      {/* {contactError && <FormControlError variant="danger" />} */}
      <fieldset className="form-fieldset" disabled={submitting}>
        <Heading size="2">Contact form</Heading>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="Enter First name" {...register("firstName")} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Enter Last name" {...register("lastName")} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Email</Form.Label>
          <Form.Control placeholder="Enter Email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>
        {/* <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Enter subject" {...register("subject")} />
          {errors.subject && <p>{errors.subject.message}</p>}
        </Form.Group> */}
        <Form.Select aria-label="Default select example" {...register("subject")}>
          <option>Please select a subject</option>
          <option value="support" label="Customer support"></option>
          <option value="suggestions" label="Suggestions"></option>
          {/* {errors.subject && <p>{errors.email.message}</p>} */}
        </Form.Select>
        {errors.subject && <p>{errors.subject.message}</p>}
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="Enter message" {...register("message")} />
          {errors.message && <FormControlError message={errors.message.message} class="input-error" />}
        </Form.Group>

        <Button type="submit" variant="primary">
          {submitting ? "Submitting.." : "Submit"}
        </Button>
        {/* <button variant="primary">{submitting ? "logging in.." : "Login"}</button> */}
      </fieldset>
    </Form>
  );
}
