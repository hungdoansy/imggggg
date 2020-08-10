import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import Container from "components/common/Container";
import Pagination from "components/common/Pagination";

import { useHashParams } from "utils/hooks";
import { useAuthContext } from "context/auth";
import { selectors } from "reducers/category";
import { fetchCategoryDetail } from "actions/category";
import { fetchPhotos } from "actions/photo";
import { PHOTOS_PER_PAGE } from "constants/settings";

import PhotoGrid from "./PhotoGrid";
import { SubmitPhotoModal, useSubmitModal } from "./EditOrSubmitPhotoModal";
import CategoryInfo from "./CategoryInfo";
import { showModal } from "actions/app";
import { Modals } from "constants/action.types";

const PhotoContainerView = ({ className, match }) => {
  const dispatch = useDispatch();
  const { hasSignedIn } = useAuthContext();
  const hashParams = useHashParams();

  const page = hashParams.getPage();
  const categoryId = parseInt(match.params.categoryId);

  const categoryInfo = useSelector((state) =>
    selectors.getCategoryInfo(state, categoryId)
  );

  useEffect(() => {
    if (!categoryInfo) {
      dispatch(fetchCategoryDetail(categoryId));
    }
  }, [dispatch, categoryId, categoryInfo]);

  useEffect(() => {
    dispatch(fetchPhotos(categoryId, page));
  }, [dispatch, categoryId, page]);

  const [
    isSubmitModalOpen,
    showSubmitModal,
    hideSubmitModal,
  ] = useSubmitModal();

  const onClickSubmitPhoto = () => {
    if (hasSignedIn) {
      showSubmitModal();
    } else {
      dispatch(showModal(Modals.SIGNIN));
    }
  };

  if (
    isNaN(categoryId) ||
    isNaN(page) ||
    (categoryInfo && !categoryInfo.exist)
  ) {
    return <Redirect to="/" />;
  } else if (
    categoryInfo &&
    page > 1 &&
    page > Math.ceil(categoryInfo.totalPhotos / PHOTOS_PER_PAGE)
  ) {
    return <Redirect to={`/categories/${categoryId}/photos`} />;
  }

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

      {categoryInfo?.totalPhotos ? (
        <PhotoGrid
          categoryId={categoryId}
          categoryName={categoryInfo && categoryInfo.name}
          currentPage={page}
        />
      ) : (
        <p className="u-text600 u-textCenter">
          Be the first contributor{" "}
          <span role="img" aria-label="">
            🤘
          </span>
        </p>
      )}

      {categoryInfo?.totalPhotos ? (
        <div className="u-textCenter">
          <Pagination
            currentPage={page}
            totalNumberOfPages={Math.ceil(categoryInfo.totalPhotos / 10)}
            baseUrl={`/categories/${categoryId}/photos#page=`}
          />
        </div>
      ) : null}

      {isSubmitModalOpen && (
        <SubmitPhotoModal
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

const PhotoContainer = styled(PhotoContainerView)`
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

export default PhotoContainer;
