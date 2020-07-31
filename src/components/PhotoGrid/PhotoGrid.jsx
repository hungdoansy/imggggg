import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { PhotoCell } from "./PhotoCell";
import { getPhotosWithParams } from "../../utils/apis/photo";
import { Pagination } from "../Pagination";

// TODO: store photos to redux

const PhotoGridView = ({
  className,
  categoryId,
  categoryName,
  currentPage,
}) => {
  const [photos, setPhotos] = useState([]);
  const [totalPhotos, setTotalPhotos] = useState(0);

  useEffect(() => {
    console.log("categoryId", categoryId);
    console.log("currentPage", currentPage);

    setPhotos([]);
    setTotalPhotos(1);

    getPhotosWithParams({ categoryId, page: currentPage }).then((data) => {
      setPhotos(data["items"]);
      setTotalPhotos(data["total_items"]);
    });
  }, [categoryId, currentPage]);

  const Photos = photos.map((p, i) => (
    <li key={i}>
      <PhotoCell description={p.description} imageUrl={p.image_url} />
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

      <div className="u-textCenter">
        <Pagination
          currentPage={currentPage}
          totalNumberOfPages={Math.ceil(totalPhotos / 10)}
          baseUrl={`/categories/${categoryId}/items/#page=`}
        />
      </div>
    </div>
  );
};

// TODO: Refine CSS
export const PhotoGrid = styled(PhotoGridView)`
  display: flex;
  flex-direction: column;

  div.photos {
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
