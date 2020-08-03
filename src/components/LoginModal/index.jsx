import React, { useState } from "react";
import { Button, Modal, Form } from "@gotitinc/design-system";
import { useAuthContext } from "../../context/auth";
import { signin } from "../../utils/apis/auth";

export const LoginModal = ({ isOpen, show, hide }) => {
  const { setAuthTokens } = useAuthContext();

  const [disabled, setDisabled] = useState(false);
  const [feedback, setFeedback] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }

    if (value === "") {
      setFeedback("Cannot leave any input empty !");
      setDisabled(true);
    } else {
      setFeedback("");
      setDisabled(false);
    }
  };

  const onClick = () => {
    if (email === "" || password === "") {
      setFeedback("Cannot leave any input empty !");
      setDisabled(true);
      return;
    }

    setDisabled(true);

    signin({ email, password })
      .then((response) => {
        if (response.status === 200) {
          setAuthTokens(response.data["access_token"]);
          hide();
        } else {
          setFeedback("Something happened, please try later...");
        }
      })
      .catch((e) => {
        setFeedback(e.response.data.message);
        setDisabled(false);
      });
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
              onChange={onInputChange}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="loginform.password">
            <Form.Label>Password</Form.Label>

            <Form.Input
              name="password"
              type="password"
              placeholder="Enter your password here"
              onChange={onInputChange}
              value={password}
            />
          </Form.Group>

          {feedback !== "" && (
            <div className="u-marginTopTiny u-widthFull u-text100 invalid-feedback is-visible">
              {feedback}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="u-flexGrow-1">
            <Button
              variant="primary"
              width="full"
              className="u-fontBold"
              onClick={onClick}
              disabled={disabled}
            >
              LOG IN
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
