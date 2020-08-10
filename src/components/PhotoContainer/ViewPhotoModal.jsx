import React, { useState, useEffect } from "react";
import { Modal, toast, Icon } from "@gotitinc/design-system";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { removePhoto } from "utils/apis/photo";
import { useAuthContext } from "context/auth";
import { fetchPhotos, fetchPhotoDetail } from "actions/photo";
import { selectors } from "reducers";

import {
  default as EditPhotoModal,
  useEditOrSubmitModal as useEditModal,
  Types,
} from "./EditOrSubmitPhotoModal";
import RemoveConfirmModal, { useRemoveModal } from "./RemoveConfirmModal";

const RemoveIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
    </svg>
  );
};

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
    </svg>
  );
};

const useViewModal = () => {
  const [isViewModalOpen, setModalOpen] = useState(false);

  const showViewModal = () => {
    setModalOpen(true);
  };

  const hideViewModal = () => {
    setModalOpen(false);
  };

  return [isViewModalOpen, showViewModal, hideViewModal];
};

const ViewPhotoModal = ({ isOpen, show, hide, photoId, categoryId, page }) => {
  const { hasSignedIn, authTokens } = useAuthContext();

  const dispatch = useDispatch();

  const photoInfo = useSelector((state) =>
    selectors.getPhotoDetail(state, photoId)
  );

  const user = useSelector(selectors.getCurrentUserInfo);

  const shouldShowButtons = hasSignedIn && user.id === photoInfo.author.id;

  const categoryInfo = useSelector((state) =>
    selectors.getCategoryInfo(state, categoryId)
  );

  const [isEditModalOpen, showEditModal, hideEditModal] = useEditModal();
  const [
    isRemoveModalOpen,
    showRemoveModal,
    hideRemoveModal,
  ] = useRemoveModal();

  const AuthorName =
    user.id === photoInfo.author.id ? "you" : <b>{photoInfo.author.name}</b>;

  const onClickEditButton = (e) => {
    e.preventDefault();
    showEditModal();
  };

  const onClickRemoveButton = (e) => {
    e.preventDefault();
    showRemoveModal();
  };

  const onClickRemoveConfirm = (e) => {
    e.preventDefault();

    removePhoto(categoryId, photoId, authTokens).then((response) => {
      if (response.status === 200) {
        toast.info(
          () => (
            <div className="u-flex u-flexGrow-1">
              <div className="u-marginRightExtraSmall">
                <Icon name="informationCircle" size="medium" />
              </div>
              <div className="u-flexGrow-1">
                <div className="u-fontMedium u-marginBottomExtraSmall">Yup</div>
                <div>The photo has been just removed</div>
              </div>
            </div>
          ),
          {}
        );

        dispatch(fetchPhotos(categoryId, page));
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

      hide();
    });
  };

  useEffect(() => {
    dispatch(fetchPhotoDetail(categoryId, photoId));
  }, [dispatch, categoryId, photoId]);

  return (
    <>
      <Modal size="extraLarge" show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span role="img" aria-label="">
              🧐
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BodyContainer>
            <div className="top">
              <div className="u-textCenter">
                <div className="img-wrapper">
                  <img
                    className="u-maxWidthFull"
                    alt={photoInfo.description}
                    src={photoInfo.src}
                  />
                  <div className="overlay">
                    {shouldShowButtons && (
                      <div className="controls">
                        <button
                          className="control-button edit-button"
                          onClick={onClickEditButton}
                        >
                          <EditIcon />
                        </button>

                        <button
                          className="control-button remove-button"
                          onClick={onClickRemoveButton}
                        >
                          <RemoveIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <p style={{ margin: 0 }}>Posted by {AuthorName}</p>
              <p className="u-textGray u-text300">{photoInfo.description}</p>
            </div>
          </BodyContainer>
        </Modal.Body>
      </Modal>

      {isEditModalOpen && (
        <EditPhotoModal
          type={Types.EDIT}
          isOpen={isEditModalOpen}
          show={showEditModal}
          hide={hideEditModal}
          categoryId={categoryId}
          categoryName={categoryInfo ? categoryInfo.name : ""}
          photoInfo={photoInfo}
        />
      )}

      {isRemoveModalOpen && (
        <RemoveConfirmModal
          isOpen={isRemoveModalOpen}
          hide={hideRemoveModal}
          actionOnConfirm={onClickRemoveConfirm}
        />
      )}
    </>
  );
};

const BodyContainer = styled.div`
  margin: 0;
  padding: 0;

  div.img-wrapper {
    position: relative;

    display: inline-block;

    img {
      width: 100%;
      height: auto;

      margin: 0;
      padding: 0;
    }
  }

  div.overlay {
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    .controls {
      position: absolute;

      bottom: 10px;
      right: 5px;

      display: flex;
      flex-direction: row;

      .control-button {
        background-color: rgba(0, 0, 0, 0.2);

        border: 1px solid white;
        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 2em;
        height: 2em;

        cursor: pointer;

        color: white;

        transition: background 0.1s linear;

        > svg {
          width: 100%;
          height: 100%;
          color: inherit;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
      }

      .edit-button {
        margin-right: 3px;
      }
    }
  }
`;

export default ViewPhotoModal;
export { useViewModal };
