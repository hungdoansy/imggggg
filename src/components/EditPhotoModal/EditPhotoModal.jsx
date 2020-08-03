import React, { useState } from "react";
import { Button, Modal, Form, toast, Icon } from "@gotitinc/design-system";
import { submitPhoto } from "../../utils/apis/photo";

export const useEditModal = () => {
  const [isEditModalOpen, setModalOpen] = useState(false);

  const showEditModal = () => {
    setModalOpen(true);
  };

  const hideEditModal = () => {
    setModalOpen(false);
  };

  return [isEditModalOpen, showEditModal, hideEditModal];
};

export const EditPhotoModal = ({
  isOpen,
  show,
  hide,
  categoryId,
  categoryName,
  url: originalUrl,
  description: originalDescription,
}) => {
  const [url, setUrl] = useState(originalUrl);
  const [description, setDescription] = useState(originalDescription);

  const onUrlInputChange = (e) => {
    setUrl(e.target.value);
  };

  const onDescriptionInputChange = (e) => {
    setDescription(e.target.value);
  };

  const onClick = () => {
    // TODO: sanitize inputs
    submitPhoto({ categoryId, userId: 4, description, imageUrl: url })
      .then(() => {
        hide();

        toast(() => (
          <div className="u-flex u-flexGrow-1 u-cursorDefault">
            <div className="u-marginRightExtraSmall">
              <Icon name="checkmarkCircle" size="medium" />
            </div>
            <div className="u-flexGrow-1">
              <div className="u-fontMedium u-marginBottomExtraSmall">
                Yooooo
              </div>
              <div>Your photo has just been edited !</div>
            </div>
          </div>
        ));
      })
      .catch((e) => e); // TODO: handle error
  };

  return (
    <>
      <Modal show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit your photo{" "}
            <span role="img" aria-label="">
              😎
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="submitform.category">
            <Form.Label>Category</Form.Label>
            <Form.Input type="text" readOnly defaultValue={categoryName} />
          </Form.Group>
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
              Edit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
