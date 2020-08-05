import React, { useEffect } from "react";
import styled from "styled-components";

import { useViewModal, ViewPhotoModal } from "../ViewPhotoModal";

import { useProfileContext } from "../../context/profile";

// TODO: only shows button when hovering the photo
const PhotoCellView = ({
  className,
  id,
  src,
  description,
  categoryId,
  categoryName,
  author,
  page,
}) => {
  const { profile } = useProfileContext();

  const AuthorName =
    profile && profile.id === author.id ? "you" : <b>{author.name}</b>;

  const [isViewModalOpen, showViewModal, hideViewModal] = useViewModal();
  const onClickImage = (e) => {
    showViewModal();
    e.preventDefault();
  };

  return (
    <div className={className}>
      <a href="/" onClick={onClickImage}>
        <img className="photo" alt={description} src={src} />
        <div className="info-overlay">
          <div className="posted-by">
            posted by <span>{AuthorName}</span>
          </div>
        </div>
      </a>

      {isViewModalOpen && (
        <ViewPhotoModal
          isOpen={isViewModalOpen}
          show={showViewModal}
          hide={hideViewModal}
          photoId={id}
          author={author}
          categoryId={categoryId}
          categoryName={categoryName}
          url={src}
          description={description}
          page={page}
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

    cursor: zoom-in;

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
`;
