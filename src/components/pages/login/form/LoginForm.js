import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_URL, TOKEN_PATH } from "../../../constants/api";
import { AuthContext } from "../../../context/AuthContext";
import Heading from "../../../Heading";
import FormControl from "../../../FormControl";

export default function LoginForm() {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const schema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
  });

  const url = API_URL + TOKEN_PATH;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function sendLoginData(data) {
    setSubmitting(true);
    // setLoginError(null);
    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      navigate("/admin");
    } catch (error) {
      console.log("error", error);
      // Display different messages on server\login error and password\email not matching
      if (error.response.status === 403) {
        setLoginError("Password and Email does not match");
      } else {
        setLoginError("Something went wrong, please try again");
      }
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Form onSubmit={handleSubmit(sendLoginData)}>
      <fieldset disabled={submitting} className="form-fieldset">
        <Heading size="2">Login form</Heading>

        {loginError && <FormControl message={loginError} variant="danger" />}

        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="input" placeholder="Enter Username" {...register("username")} defaultValue="ThomasPerry" />
          {errors.username && <FormControl message={errors.username.message} className="input-error" />}
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" defaultValue="UQg@uGDj1yOum5oeBT" {...register("password")} />
          {errors.password && <FormControl message={errors.password.message} className="input-error" />}
        </Form.Group>

        <Button type="submit" variant="primary">
          {submitting ? "logging in.." : "Login"}
        </Button>
      </fieldset>
    </Form>
  );
}
// ThomasPerry
// UQg@uGDj1yOum5oeBT
