import React, { useState } from "react";
import { Button, Modal, Form, toast, Icon } from "@gotitinc/design-system";
import { useAuth } from "../../context/auth";
import { useHashParams } from "../../utils/hooks";

const SUBMIT = "submit";

const sanitizerCheck = ({ url, description }) => {
  return {
    passed: true,
  };
};

export const useSubmitModal = () => {
  const hashParams = useHashParams();

  const [isSubmitModalOpen, setModalOpen] = useState(() => {
    if (hashParams.getAction() === SUBMIT) {
      return true;
    }

    return false;
  });

  const showSubmitModal = () => {
    setModalOpen(true);
  };

  const hideSubmitModal = () => {
    setModalOpen(false);
  };

  return [isSubmitModalOpen, showSubmitModal, hideSubmitModal];
};

export const SubmitPhotoModal = ({ isOpen, show, hide }) => {
  const { setAuthTokens } = useAuth();

  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const onUrlInputChange = (e) => {
    setUrl(e.target.value);
  };

  const onDescriptionInputChange = (e) => {
    setDescription(e.target.value);
  };

  const onClick = () => {
    const { passed } = sanitizerCheck({ url, description });

    if (passed) {
      // TODO: disable the Next button, maybe show a loading indicator
      // Paint green the button when it's successful and then reload (maybe not)
      // submit({ url, description }).then((response) => {
      //   if (response["access_token"]) {
      //     setAuthTokens(response["access_token"]);
      //     hide();
      //   }
      // });

      hide();

      toast(() => (
        <div className="u-flex u-flexGrow-1 u-cursorDefault">
          <div className="u-marginRightExtraSmall">
            <Icon name="checkmarkCircle" size="medium" />
          </div>
          <div className="u-flexGrow-1">
            <div className="u-fontMedium u-marginBottomExtraSmall">
              Yeahhhhh !
            </div>
            <div>Your photo has just been submitted !</div>
          </div>
        </div>
      ));
    } else {
      // TODO: display the error message
    }
  };

  return (
    <>
      <Modal show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Your photo shall be published{" "}
            <span role="img" aria-label="">
              🥳
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="submitform.url">
            <Form.Label>URL</Form.Label>
            <Form.Input
              type="text"
              placeholder="Link to your photo"
              value={url}
              onChange={onUrlInputChange}
            />
          </Form.Group>

          <Form.Group controlId="submitform.description">
            <Form.Label>Description</Form.Label>
            <Form.Input
              as="textarea"
              rows={3}
              placeholder="..."
              value={description}
              onChange={onDescriptionInputChange}
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
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
