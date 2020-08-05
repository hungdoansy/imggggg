import React, { useState } from "react";
import { Button, Modal, toast, Icon } from "@gotitinc/design-system";

import { removePhoto } from "../../utils/apis/photo";
import { useAuthContext } from "../../context/auth";

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
  photoId,
  categoryId,
  url,
  description,
}) => {
  const { authTokens } = useAuthContext();

  const onClick = () => {
    // TODO: sanitize inputs
    const info = {
      description,
      imageUrl: url,
    };

    removePhoto(categoryId, photoId, info, authTokens).then((response) => {
      hide();

      if (response.status === 200) {
        // TODO: refresh the view when this's done
        toast(() => (
          <div className="u-flex u-flexGrow-1 u-cursorDefault">
            <div className="u-marginRightExtraSmall">
              <Icon name="checkmarkCircle" size="medium" />
            </div>
            <div className="u-flexGrow-1">
              <div className="u-fontMedium u-marginBottomExtraSmall">Yup</div>
              <div>Your photo has just been removed...</div>
            </div>
          </div>
        ));
      } else {
        toast.error(() => (
          <div className="u-flex u-flexGrow-1 u-cursorDefault">
            <div className="u-marginRightExtraSmall">
              <Icon name="alert" size="medium" />
            </div>
            <div className="u-flexGrow-1">
              <div className="u-fontMedium u-marginBottomExtraSmall">Error</div>
              <div>Please reload and try again</div>
            </div>
          </div>
        ));
      }
    });
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
