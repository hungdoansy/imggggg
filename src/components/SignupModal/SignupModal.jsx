import React, { useState } from "react";
import { Button, Modal, Form } from "@gotitinc/design-system";
import produce from "immer";

import { useAuthContext } from "../../context/auth";
import { signup, signin } from "../../utils/apis/auth";
import { useSafeSetState } from "../../utils/hooks";

// TODO: sanitize inputs
export const SignupModal = ({ isOpen, show, hide }) => {
  const { setAuthTokens } = useAuthContext();

  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useSafeSetState({
    name: {
      value: "",
      feedback: "",
    },
    email: {
      value: "",
      feedback: "",
    },
    password: {
      value: "",
      feedback: "",
    },
    feedback: "",
  });

  const onNameInputChange = (e) => {
    setState(
      produce(state, (draftState) => {
        draftState.name.value = e.target.value;
      })
    );
  };

  const onEmailInputChange = (e) => {
    setState(
      produce(state, (draftState) => {
        draftState.email.value = e.target.value;
      })
    );
  };

  const onPasswordInputChange = (e) => {
    setState(
      produce(state, (draftState) => {
        draftState.password.value = e.target.value;
      })
    );
  };

  const onClick = () => {
    const info = {
      name: state.name.value,
      email: state.email.value,
      password: state.password.value,
    };

    setDisabled(true);
    signup(info)
      .then((response) => {
        if (response.status === 201) {
          signin(info)
            .then((response) => {
              if (response.status === 200) {
                setAuthTokens(response.data["access_token"]);
                hide();
              } else {
                setState(
                  (state) =>
                    (state.feedback =
                      "Something happened, please reload and log in...")
                );
              }
            })
            .catch((e) => {
              setState(
                (state) =>
                  (state.feedback =
                    "Something happened, please reload and log in...")
              );
            });
        }
      })
      .catch((e) => {
        ["email", "name", "password"].forEach((which) => {
          if (e.response.data.error[which]) {
            setState(
              produce(state, (draftState) => {
                draftState[which].feedback = e.response.data.error[which][0];
              })
            );
          }
        });

        setDisabled(false);
      });
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
              value={state.name.value}
              onChange={onNameInputChange}
              isInvalid={state.name.feedback !== ""}
            />
            <Form.Feedback type="invalid">{state.name.feedback}</Form.Feedback>
          </Form.Group>

          <Form.Group controlId="loginform.email">
            <Form.Label>Email</Form.Label>
            <Form.Input
              type="email"
              placeholder="Your email so we contact you"
              value={state.email.value}
              onChange={onEmailInputChange}
              isInvalid={state.email.feedback !== ""}
            />
            <Form.Feedback type="invalid">{state.email.feedback}</Form.Feedback>
          </Form.Group>

          <Form.Group controlId="loginform.password">
            <Form.Label>Password</Form.Label>
            <Form.Input
              type="password"
              placeholder="To secure your account"
              value={state.password.value}
              onChange={onPasswordInputChange}
              isInvalid={state.password.feedback !== ""}
            />
            <Form.Feedback type="invalid">
              {state.password.feedback}
            </Form.Feedback>
          </Form.Group>
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
              SIGN UP
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
