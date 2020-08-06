import React, { useState } from "react";
import { Button, Modal } from "@gotitinc/design-system";

export const useRemoveModal = () => {
  const [isRemoveModalOpen, setModalOpen] = useState(false);

  const showRemoveModal = () => {
    setModalOpen(true);
  };

  const hideRemoveModal = () => {
    setModalOpen(false);
  };

  return [isRemoveModalOpen, showRemoveModal, hideRemoveModal];
};

export const RemoveConfirmModal = ({ isOpen, hide, actionOnConfirm }) => {
  return (
    <>
      <Modal size="small" show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Please make sure this is serious{" "}
            <span role="img" aria-label="">
              🥺
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            variant="negative_outline"
            width="full"
            className="u-fontBold"
            onClick={actionOnConfirm}
          >
            Remove
          </Button>
          <Button variant="primary" width="full" onClick={hide}>
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
