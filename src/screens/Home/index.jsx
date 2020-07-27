import React, { useState } from "react";

import { Header } from "../../components/Header";
import { ImageGrid } from "../../components/ImageGrid";
import { useLocation } from "react-router-dom";
import { Modal, Button } from "@gotitinc/design-system";

const LOGIN = "login";
const SIGNUP = "signup";

const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

export const Home = (props) => {
  const queryParams = useQueryParams();

  const [showLoginModal, setShowLoginModal] = useState(() => {
    if (queryParams.get("action") === LOGIN) {
      return true;
    }

    return false;
  });

  const hideLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <Header />
      <ImageGrid />

      {showLoginModal && (
        <Modal show={showLoginModal} onHide={hideLoginModal}>
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
            <Button variant="secondary" onClick={hideLoginModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={hideLoginModal}>
              Ok, Got It!
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
