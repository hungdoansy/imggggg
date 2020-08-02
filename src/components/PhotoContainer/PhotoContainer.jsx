import React, { useState } from "react";
import { toast, Icon } from "@gotitinc/design-system";
import styled from "styled-components";

import { PhotoGrid } from "../../components/PhotoGrid/PhotoGrid";
import { useHashParams } from "../../utils/hooks";
import { Container } from "../Container";

import { useAuthContext } from "../../context/auth";
import { SubmitPhotoModal, useSubmitModal } from "../SubmitPhotoModal";

import { CategoryInfo } from "./CategoryInfo";
import { Pagination } from "../Pagination";
import { useSelector } from "react-redux";
import { selectors } from "../../reducers/category";

// TODO: fetch categoryInfo on load
const PhotoContainerView = ({ className, match }) => {
  const { hasSignedIn } = useAuthContext();
  const hashParams = useHashParams();
  const categoryId = parseInt(match.params.categoryId);

  const categoryInfo = useSelector((state) => {
    const thisCategory = selectors.getCategoryInfo(state, categoryId);
    return thisCategory
      ? thisCategory
      : {
          name: "",
          description: "",
          totalPhotos: undefined,
        };
  });
  // const { name: categoryName, totalNumberOfPhotos: totalPhotos } = categoryInfo;

  console.log("categoryInfo", categoryInfo);
  // console.log(Math.ceil(categoryInfo.totalPhotos / 10));

  const [
    isSubmitModalOpen,
    showSubmitModal,
    hideSubmitModal,
  ] = useSubmitModal();

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
          <CategoryInfo
            name={categoryInfo.name}
            description={categoryInfo.description}
            totalPhotos={categoryInfo.totalPhotos}
          />
        </div>
        <div className="top-right">
          <div className="submit-box">
            <button
              className={`
                u-paddingVerticalSmall u-fontMedium u-border u-borderPrimary u-roundedMedium 
                u-cursorPointer u-text300 u-textPrimary
              `}
              onClick={onClickSubmitPhoto}
            >
              Submit a photo to <b>{categoryInfo.name}</b>
            </button>
          </div>
        </div>
      </div>
      <PhotoGrid categoryId={categoryId} currentPage={page} />

      {categoryInfo.totalPhotos && (
        <div className="u-textCenter">
          <Pagination
            currentPage={page}
            totalNumberOfPages={Math.ceil(categoryInfo.totalPhotos / 10)}
            baseUrl={`/categories/${categoryId}/items/#page=`}
          />
        </div>
      )}

      {isSubmitModalOpen && (
        <SubmitPhotoModal
          isOpen={isSubmitModalOpen}
          show={showSubmitModal}
          hide={hideSubmitModal}
          categoryId={categoryId}
          categoryName={categoryInfo.categoryName}
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

      display: flex;
      flex-direction: column;
      justify-content: center;

      button {
        background-color: transparent;
      }
    }
  }
`;
