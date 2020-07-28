import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryCellView = ({ className, id, name, imageUrl, description }) => {
  return (
    <div className={className}>
      <Link to={`/categories/${id}/items`}>
        <img src={imageUrl} alt={description} />
      </Link>

      <div>
        <span>{name}</span>
      </div>
    </div>
  );
};

export const CategoryCell = styled(CategoryCellView)`
  position: relative;

  width: 200px;
  height: 200px;
  border-radius: 4px;

  > a > img {
    max-height: 100%;
    min-width: 100%;

    object-fit: cover;
    vertical-align: bottom;
    border-radius: 4px;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;

    width: 200px;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.3);

    border-radius: 4px;

    > span {
      color: white;
      text-transform: capitalize;
      font-size: 24px;
      font-weight: bold;
    }
  }
`;
