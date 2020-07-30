import React, { useState } from "react";
import { Button, Modal, Form } from "@gotitinc/design-system";
import { useAuth } from "../../context/auth";
import { useHashParams } from "../../utils/hooks";

const CREATE = "create";

const sanitizerCheck = ({ url, description }) => {
  return {
    passed: true,
  };
};

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
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const onNameInputChange = (e) => {
    setName(e.target.value);
  };

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
    } else {
      // TODO: display the error message
    }
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
              value={url}
              onChange={onUrlInputChange}
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
