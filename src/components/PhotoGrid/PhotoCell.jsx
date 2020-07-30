import React from "react";
import styled from "styled-components";

const PhotoCellView = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <a href="/">
        <img className="photo" alt={alt} src={src} />
        <div className="info-overlay">Hehe</div>
      </a>
    </div>
  );
};

export const PhotoCell = styled(PhotoCellView)`
  display: inline-flex;

  height: 100%;
  min-width: 100%;

  background-color: red;
  position: relative;

  > a {
    height: 100%;
    min-width: 100%;
  }

  .photo {
    height: 100%;
    min-width: 100%;

    object-fit: cover;
    vertical-align: bottom;

    border-radius: 4px;
  }

  .info-overlay {
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;

    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    color: white;
    border: 1px dashed red;
  }
`;
