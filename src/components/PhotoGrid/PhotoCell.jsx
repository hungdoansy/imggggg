import React from "react";
import styled from "styled-components";

import { useEditModal, EditPhotoModal } from "../EditPhotoModal";
import { useRemoveModal, RemovePhotoModal } from "../RemovePhotoModal";

import { useAuthContext } from "../../context/auth";
import { useProfileContext } from "../../context/profile";

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

// TODO: only shows button when hovering the photo
const PhotoCellView = ({
  className,
  src,
  description,
  categoryId,
  categoryName,
  author,
}) => {
  const { hasSignedIn } = useAuthContext();
  const { profile } = useProfileContext();

  const shouldShowButtons = hasSignedIn && profile && profile.id === author.id;
  const AuthorName =
    profile && profile.id === author.id ? "you" : <b>{author.name}</b>;

  const [isEditModalOpen, showEditModal, hideEditModal] = useEditModal();
  const [
    isRemoveModalOpen,
    showRemoveModal,
    hideRemoveModal,
  ] = useRemoveModal();

  const onClickEditButton = (e) => {
    showEditModal();
    e.preventDefault();
  };

  const onClickRemoveButton = (e) => {
    showRemoveModal();
    e.preventDefault();
  };

  return (
    <div className={className}>
      <a href="/">
        <img className="photo" alt={description} src={src} />
        <div className="info-overlay">
          <div className="posted-by">
            posted by <span>{AuthorName}</span>
          </div>

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
      </a>

      {isEditModalOpen && (
        <EditPhotoModal
          isOpen={isEditModalOpen}
          show={showEditModal}
          hide={hideEditModal}
          categoryId={categoryId}
          categoryName={categoryName}
          url={src}
          description={description}
        />
      )}

      {isRemoveModalOpen && (
        <RemovePhotoModal
          isOpen={isRemoveModalOpen}
          show={showRemoveModal}
          hide={hideRemoveModal}
          categoryId={categoryId}
          categoryName={categoryName}
          url={src}
          description={description}
        />
      )}
    </div>
  );
};

export const PhotoCell = styled(PhotoCellView)`
  display: inline-flex;

  height: 100%;
  min-width: 100%;

  background-color: rgba(255, 255, 255, 0.7);
  position: relative;

  transition: all 0.7s ease-out;

  > a {
    height: 100%;
    min-width: 100%;

    &:hover {
      .info-overlay {
        visibility: visible;
      }
    }
  }

  .photo {
    height: 100%;
    min-width: 100%;

    object-fit: cover;
    vertical-align: bottom;

    border-radius: 4px;
  }

  .info-overlay {
    visibility: hidden;

    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;

    height: 100%;
    width: 100%;

    top: 0;
    left: 0;

    padding-left: 5px;

    color: white;
  }

  .controls {
    position: absolute;

    bottom: 5px;
    right: 5px;

    display: flex;
    flex-direction: row;

    .control-button {
      background-color: transparent;

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
`;
