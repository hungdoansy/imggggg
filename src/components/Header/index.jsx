import React, { useState } from "react";
import {
  Header,
  Logo,
  Button,
  SafeAnchor,
  Modal,
} from "@gotitinc/design-system";
import { TabBar } from "../TabBar";

const MyHeader = () => {
  const hasBeenAuthenticated = false;

  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <div className="u-shadowSmall u-marginBottomSmall">
      <Header fullWidth className="u-paddingVerticalMedium">
        <Header.Brand>
          <Logo as={SafeAnchor} name="gotit" variant="original" height={40} />
        </Header.Brand>
        <Header.Main>
          {!hasBeenAuthenticated && (
            <Header.Right>
              <Button variant="primary_outline" onClick={showModal}>
                Login
              </Button>
              <Button
                variant="primary"
                className="u-marginLeftSmall"
                onClick={showModal}
              >
                Sign up
              </Button>
            </Header.Right>
          )}
        </Header.Main>
      </Header>

      {/* TODO: show/hide the tab bar based on auth status (localStorage) */}
      <TabBar />

      {!hasBeenAuthenticated && show && (
        <Modal show={show} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="u-textCenter">
              <img
                src="holder.js/100px160?text=Image"
                className="u-maxWidthFull u-marginBottomExtraSmall"
                alt=""
              />
            </div>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={hideModal}>
              Ok, Got It!
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export { MyHeader as Header };
