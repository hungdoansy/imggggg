import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, Icon } from "@gotitinc/design-system";
import styled from "styled-components";

import { PhotoGrid } from "../../components/PhotoGrid/PhotoGrid";
import { useHashParams } from "../../utils/hooks";
import { Container } from "../Container";

import { useAuthContext } from "../../context/auth";
import {
  EditOrSubmitPhotoModal as SubmitPhotoModal,
  useEditOrSubmitModal as useSubmitModal,
  Types,
} from "../EditOrSubmitPhotoModal";

import { CategoryInfo } from "./CategoryInfo";
import { Pagination } from "../Pagination";
import { selectors } from "../../reducers/category";
import { fetchCategoryDetail } from "../../actions/category";

// TODO: fetch categoryInfo on load
const PhotoContainerView = ({ className, match }) => {
  const dispatch = useDispatch();
  const { hasSignedIn } = useAuthContext();
  const hashParams = useHashParams();
  const categoryId = parseInt(match.params.categoryId);

  const categoryInfo = useSelector((state) =>
    selectors.getCategoryInfo(state, categoryId)
  );
  // const { name: categoryName, totalNumberOfPhotos: totalPhotos } = categoryInfo;

  console.log("categoryInfo", categoryInfo);
  // console.log(Math.ceil(categoryInfo.totalPhotos / 10));

  useEffect(() => {
    if (!categoryInfo) {
      dispatch(fetchCategoryDetail(categoryId));
    }
  });

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
          {categoryInfo && (
            <CategoryInfo
              name={categoryInfo.name}
              description={categoryInfo.description}
              totalPhotos={categoryInfo.totalPhotos}
            />
          )}
        </div>
        <div className="top-right">
          <div className="submit-box">
            {categoryInfo && categoryInfo.name && (
              <button
                className={`
                  u-paddingVerticalSmall u-fontMedium u-border u-borderPrimary u-roundedMedium 
                  u-paddingHorizontalExtraSmall u-cursorPointer u-text300 u-textPrimary
                `}
                onClick={onClickSubmitPhoto}
              >
                Submit a photo to <b>{categoryInfo.name}</b>
              </button>
            )}
          </div>
        </div>
      </div>

      <PhotoGrid
        categoryId={categoryId}
        categoryName={categoryInfo && categoryInfo.name}
        currentPage={page}
      />

      {categoryInfo && categoryInfo.totalPhotos && (
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
          type={Types.SUBMIT}
          isOpen={isSubmitModalOpen}
          show={showSubmitModal}
          hide={hideSubmitModal}
          categoryId={categoryId}
          categoryName={categoryInfo && categoryInfo.name}
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
    min-height: 100px;

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
