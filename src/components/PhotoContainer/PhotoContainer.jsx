import React from "react";
import { toast, Icon } from "@gotitinc/design-system";
import styled from "styled-components";

import { PhotoGrid } from "../../components/PhotoGrid/PhotoGrid";
import { useHashParams } from "../../utils/hooks";
import { Container } from "../Container";

import { useAuthContext } from "../../context/auth";
import { SubmitPhotoModal, useSubmitModal } from "../SubmitPhotoModal";

import { CategoryInfo } from "./CategoryInfo";

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
      <div className="top">
        <div className="top-left">
          <CategoryInfo />
        </div>
        <div className="top-right">
          <div className="submit-box">
            <button
              className="u-paddingVerticalSmall u-fontMedium u-border u-borderPrimary u-roundedMedium u-cursorPointer u-text400 u-textPrimary"
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

  div.top {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;

    div.top-left {
      flex: 1 1;
      margin-right: 40px;
    }

    div.top-right {
      flex: 0 0 200px;

      button {
        background-color: transparent;
      }
    }
  }
`;
