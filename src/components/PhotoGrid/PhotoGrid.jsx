import React from "react";
import styled from "styled-components";
import { PhotoCell } from "./PhotoCell";
import { getPhotosWithParams } from "../../mocks";
import { Pagination } from "../Pagination";
import { SubmitPhotoModal, useSubmitModal } from "../SubmitPhotoModal";

// TODO: store photos to redux
const photosCreator = (categoryId, page) => {
  return getPhotosWithParams(categoryId, page).map((info, i) => {
    return (
      <li key={i}>
        <PhotoCell alt={info.description} src={info.src} />
      </li>
    );
  });
};

const PhotoGridView = ({
  className,
  categoryId,
  categoryName,
  currentPage,
}) => {
  const [
    isSubmitModalOpen,
    showSubmitModal,
    hideSubmitModal,
  ] = useSubmitModal();

  const onClickSubmitPhoto = () => {
    showSubmitModal();
  };

  return (
    <div className={className + " Container Container--fluid"}>
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

      <div>
        <ul>
          {photosCreator(categoryId, currentPage)}
          <li></li>
        </ul>
      </div>

      <div className="u-textCenter">
        <Pagination
          currentPage={currentPage}
          totalNumberOfPages={20}
          baseUrl={`/categories/${categoryId}/items/#page=`}
        />
      </div>

      {isSubmitModalOpen && (
        <SubmitPhotoModal
          isOpen={isSubmitModalOpen}
          show={showSubmitModal}
          hide={hideSubmitModal}
          categoryId={categoryId}
          categoryName={categoryName}
        />
      )}
    </div>
  );
};

// TODO: Refine CSS
export const PhotoGrid = styled(PhotoGridView)`
  display: flex;
  flex-direction: column;

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;

    > div:nth-child(1) {
      .category-name {
        font-size: 40px;
        font-weight: bold;
        padding-top: 30px;
        padding-bottom: 10px;

        margin: 0;
      }

      .category-description {
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

  > div:nth-child(2) {
    > ul {
      padding: 0;
      margin: 0;

      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      list-style: none;

      margin-left: -6px;
      margin-right: -6px;

      &:after {
        content: "";
        flex: auto;
      }

      > li {
        height: 40vh;
        flex-grow: 1;
        padding: 6px;
      }

      > li:last-child {
        flex-grow: 10;
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
