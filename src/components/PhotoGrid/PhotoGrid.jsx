import React from "react";
import { PhotoCell } from "./PhotoCell";
import styled from "styled-components";
import { getPhotosByCategoryId } from "../../mocks";

const photosCreator = (categoryId) => {
  return getPhotosByCategoryId(categoryId).map((info, i) => {
    return (
      <li key={i}>
        <PhotoCell alt={info.description} src={info.src} />
      </li>
    );
  });
};

const PhotoGridView = ({ className, categoryId }) => {
  return (
    <div className={className + " Container Container--fluid"}>
      <div>
        <div>
          <p class="category-name">Category name</p>
          <p class="category-description">
            Category description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quos tenetur, eos veritatis nihil fugit ut
            voluptatem nulla iste odit hic. Perspiciatis dolorem ratione sint
            accusantium aspernatur soluta facere esse consequatur!
          </p>
        </div>
        <div>
          <div class="category-stats">Stats</div>
          <div class="new-photo-submit">Submit a photo</div>
        </div>
      </div>
      <div>
        <ul>
          {photosCreator(categoryId)}
          <li></li>
        </ul>
      </div>
    </div>
  );
};

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
      flex: 1 0 300px;

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
`;
