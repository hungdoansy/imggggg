import React, { useState } from "react";
import { Button, Modal, Form } from "@gotitinc/design-system";
import { useAuth } from "../../context/auth";
import { login } from "../../utils/actions/auth";

const sanitizerCheck = ({ email, password }) => {
  return {
    passed: true,
  };
};

export const LoginModal = ({ isOpen, show, hide }) => {
  const { setAuthTokens } = useAuth();

  const onClick = () => {
    const { passed } = sanitizerCheck({ email, password });

    if (passed) {
      // TODO: disable the Next button, maybe show a loading indicator
      // Paint green the button when it's successful and then reload (maybe not)
      login({ email, password }).then((response) => {
        if (response["access_token"]) {
          setAuthTokens(response["access_token"]);
          hide();
        }
      });
    } else {
      // TODO: display the error message
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Modal show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Welcome back to Imggggg{" "}
            <span role="img" aria-label="">
              😛
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="loginform.email">
            <Form.Label>Email</Form.Label>
            <Form.Input
              name="email"
              type="email"
              placeholder="Enter your email here"
              onChange={onEmailInputChange}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="loginform.password">
            <Form.Label>Password</Form.Label>

            <Form.Input
              name="password"
              type="password"
              placeholder="Enter your password here"
              onChange={onPasswordInputChange}
              value={password}
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
              Next
            </Button>

            <div className="u-marginTopTiny u-text100 u-textCenter u-textGray">
              Don't have an account?{" "}
              <span className="u-fontBold u-textUnderline">Sign up</span>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
