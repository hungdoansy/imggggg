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
      <ul>
        {photosCreator(categoryId)}
        <li></li>
      </ul>
    </div>
  );
};

export const PhotoGrid = styled(PhotoGridView)`
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
`;
