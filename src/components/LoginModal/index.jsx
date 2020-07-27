import React from "react";
import { Button, Modal, Form } from "@gotitinc/design-system";

export const LoginModal = ({ isOpen, show, hide }) => {
  return (
    <>
      {isOpen && (
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
            <Form.Group controlId="loginform.username">
              <Form.Label>Username</Form.Label>
              <Form.Input type="text" placeholder="Enter your username here" />
            </Form.Group>

            <Form.Group controlId="loginform.password">
              <Form.Label>Password</Form.Label>
              <Form.Input
                type="password"
                placeholder="Enter your password here"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <div className="u-flexGrow-1">
              <Button variant="primary" width="full" className="u-fontBold">
                Next
              </Button>

              <div className="u-marginTopTiny u-text100 u-textCenter u-textGray">
                Don't have an account?{" "}
                <span className="u-fontBold u-textUnderline">Sign up</span>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
