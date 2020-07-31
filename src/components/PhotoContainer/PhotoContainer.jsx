import React from "react";
import { toast, Icon } from "@gotitinc/design-system";
import styled from "styled-components";

import { PhotoGrid } from "../../components/PhotoGrid/PhotoGrid";
import { useHashParams } from "../../utils/hooks";
import { Container } from "../Container";

import { useAuthContext } from "../../context/auth";
import { SubmitPhotoModal, useSubmitModal } from "../SubmitPhotoModal";

const PhotoContainerView = ({ className, match }) => {
  const { hasSignedIn } = useAuthContext();
  const hashParams = useHashParams();

  const [
    isSubmitModalOpen,
    showSubmitModal,
    hideSubmitModal,
  ] = useSubmitModal();

  const categoryId = parseInt(match.params.categoryId);
  const categoryName = "something";
  const page = hashParams.getPage();

  const onClickSubmitPhoto = () => {
    if (hasSignedIn) {
      showSubmitModal();
    } else {
      toast.info(
        () => (
          <div className="u-flex u-flexGrow-1">
            <div className="u-marginRightExtraSmall">
              <Icon name="informationCircle" size="medium" />
            </div>
            <div className="u-flexGrow-1">
              <div className="u-fontMedium u-marginBottomExtraSmall">
                A friendly reminder
              </div>
              <div>Please sign in to submit your photo</div>
            </div>
          </div>
        ),
        {}
      );
    }
  };

  return (
    <Container className={className}>
      <div className="category-info">
        <div>
          <p className="category-name">Category name</p>
          <p className="category-description">
            Category description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quos tenetur, eos veritatis nihil fugit ut
            voluptatem nulla iste odit hic. Perspiciatis dolorem ratione sint
            accusantium aspernatur soluta facere esse consequatur!
          </p>
        </div>

        <div>
          <div className="u-roundedMedium u-border u-borderPrimary category-stats">
            Stats: 100 Photos
          </div>
          <div className="u-paddingVerticalExtraSmall submit-box">
            <button
              className="u-fontMedium u-border u-borderPrimary u-roundedMedium u-cursorPointer u-text300 u-textPrimary"
              onClick={onClickSubmitPhoto}
            >
              Submit a photo to <b>{categoryName}</b>
            </button>
          </div>
        </div>
      </div>

      <PhotoGrid
        categoryId={categoryId}
        categoryName={categoryName}
        currentPage={page}
      />

      {isSubmitModalOpen && (
        <SubmitPhotoModal
          isOpen={isSubmitModalOpen}
          show={showSubmitModal}
          hide={hideSubmitModal}
          categoryId={categoryId}
          categoryName={categoryName}
        />
      )}
    </Container>
  );
};

export const PhotoContainer = styled(PhotoContainerView)`
  p {
    padding: 0;
    margin: 0;
  }

  div.category-info {
    display: flex;
    flex-direction: row;

    > div:nth-child(1) {
      p.category-name {
        font-size: 40px;
        font-weight: bold;
      }

      p.category-description {
      }
    }

    > div:nth-child(2) {
      flex: 1 0 250px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > div {
        width: 80%;
        text-align: center;
      }
    }
  }

  div.submit-box {
    flex-shrink: 0;
    cursor: pointer;

    > button {
      padding: calc(0.375rem - 1px) 0.7rem;

      transition: all 0.15s ease-in-out;

      user-select: none;
      cursor: pointer;

      border-radius: 4px;

      background-color: transparent;
    }
  }
`;
