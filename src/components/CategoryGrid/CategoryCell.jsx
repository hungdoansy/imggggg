import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryCellView = ({ className, id, name, imageUrl, description }) => {
  return (
    <div className={className}>
      <Link to={`/categories/${id}/items`}>
        <img src={imageUrl} alt={description} width="200" height="200" />

        <div>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};

export const CategoryCell = styled(CategoryCellView)`
  position: relative;

  display: inline-block;

  width: 200px;
  height: 200px;
  border-radius: 4px;

  > a {
    z-index: 10;
    height: 100%;
    width: 100%;

    display: inline-block;

    > img {
      z-index: 9;
      height: 100%;
      width: 100%;

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

        text-shadow: 0 0 3px #fff;

        text-align: center;
      }
    }
  }
`;
