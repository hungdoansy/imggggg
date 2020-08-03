import React, { useState } from "react";
import { Button, Modal, Form } from "@gotitinc/design-system";
import { useAuthContext } from "../../context/auth";
import { signup } from "../../utils/apis/auth";

export const SignupModal = ({ isOpen, show, hide }) => {
  const { setAuthTokens } = useAuthContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameInputChange = (e) => {
    setName(e.target.value);
  };

  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const onClick = () => {
    const { passed } = sanitizerCheck({ name, email, password });

    if (passed) {
      // TODO: disable the Next button, maybe show a loading indicator
      // Paint green the button when it's successful and then reload (maybe not)
      signup({ name, email, password }).then((response) => {
        if (response["access_token"]) {
          setAuthTokens(response["access_token"]);
          hide();
        }
      });
    } else {
      // TODO: display the error message
    }
  };

  return (
    <>
      <Modal show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Welcome to Imggggg{" "}
            <span role="img" aria-label="">
              🥳
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="loginform.name">
            <Form.Label>Name</Form.Label>
            <Form.Input
              type="text"
              placeholder="What's your name?"
              value={name}
              onChange={onNameInputChange}
            />
          </Form.Group>

          <Form.Group controlId="loginform.email">
            <Form.Label>Email</Form.Label>
            <Form.Input
              type="email"
              placeholder="Your email so we contact you"
              value={email}
              onChange={onEmailInputChange}
            />
          </Form.Group>

          <Form.Group controlId="loginform.password">
            <Form.Label>Password</Form.Label>
            <Form.Input
              type="password"
              placeholder="To secure your account"
              value={password}
              onChange={onPasswordInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <div className="u-flexGrow-1">
            <Button
              variant="primary"
              width="full"
              className="u-fontBold"
              onClick={onClick}
            >
              SIGN UP
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
