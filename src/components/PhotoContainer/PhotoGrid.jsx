import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import PhotoCell from "./PhotoCell";

import { selectors } from "reducers";

const PhotoGridView = ({
  className,
  categoryId,
  categoryName,
  currentPage,
}) => {
  const photos = useSelector((state) =>
    selectors.getPhotos(state, categoryId, currentPage)
  );

  const Photos = photos.map((p) => (
    <li key={p.id}>
      <PhotoCell
        id={p.id}
        description={p.description}
        src={p.src}
        categoryId={categoryId}
        categoryName={categoryName}
        author={p.author}
        page={currentPage}
      />
    </li>
  ));

  return (
    <div className={className}>
      <div className="photos">
        <ul>
          {Photos}
          <li></li>
        </ul>
      </div>
    </div>
  );
};

const PhotoGrid = styled(PhotoGridView)`
  display: flex;
  flex-direction: column;

  div.photos {
    margin-bottom: 20px;

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

export default PhotoGrid;
