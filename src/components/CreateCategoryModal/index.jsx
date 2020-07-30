import React, { useState } from "react";
import { Button, Modal, Form, toast, Icon } from "@gotitinc/design-system";
import { useHashParams } from "../../utils/hooks";
import { createCategory } from "../../utils/apis/category";

const CREATE = "create";

// TODO: sanitize inputs

export const useCreateModal = () => {
  const hashParams = useHashParams();

  const [isCreateModalOpen, setModalOpen] = useState(() => {
    if (hashParams.getAction() === CREATE) {
      return true;
    }

    return false;
  });

  const showCreateModal = () => {
    setModalOpen(true);
  };

  const hideCreateModal = () => {
    setModalOpen(false);
  };

  return [isCreateModalOpen, showCreateModal, hideCreateModal];
};

export const CreateCategoryModal = ({ isOpen, show, hide }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const onNameInputChange = (e) => {
    setName(e.target.value);
  };

  const onImageUrlInputChange = (e) => {
    setImageUrl(e.target.value);
  };

  const onDescriptionInputChange = (e) => {
    setDescription(e.target.value);
  };

  const onClick = () => {
    // TODO: check for error
    createCategory({ name, imageUrl, description }).then(() => {
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
            <div>
              Category <b>{name}</b> has just been created
            </div>
          </div>
        </div>
      ));
    });
  };

  return (
    <>
      <Modal show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Create a new category{" "}
            <span role="img" aria-label="">
              🥰
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="createform.name">
            <Form.Label>Name</Form.Label>
            <Form.Input
              type="text"
              placeholder="The category's name"
              value={name}
              onChange={onNameInputChange}
            />
          </Form.Group>

          <Form.Group controlId="createform.url">
            <Form.Label>Image URL</Form.Label>
            <Form.Input
              type="text"
              placeholder="Link to a featuring photo"
              value={imageUrl}
              onChange={onImageUrlInputChange}
            />
          </Form.Group>

          <Form.Group controlId="createform.description">
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
              Create
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
