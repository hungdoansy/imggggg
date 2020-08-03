import React, { useState } from "react";
import { Button, Modal, Form, toast, Icon } from "@gotitinc/design-system";
import { submitPhoto } from "../../utils/apis/photo";

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

export const RemovePhotoModal = ({
  isOpen,
  show,
  hide,
  categoryId,
  categoryName,
  url,
  description,
}) => {
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
      <Modal size="large" show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Please make sure this is serious{" "}
            <span role="img" aria-label="">
              🥺
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="u-textCenter">
            <img
              className="u-maxWidthFull u-marginBottomExtraSmall"
              alt={description}
              src={url}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="u-flexGrow-1">
            <Button
              variant="negative"
              width="full"
              className="u-fontBold"
              onClick={onClick}
            >
              Remove
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
