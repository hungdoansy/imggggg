import React from "react";
import styled from "styled-components";

const PhotoCellView = ({ className, src, alt }) => {
  return <img className={className} alt={alt} src={src}></img>;
};

export const PhotoCell = styled(PhotoCellView)`
  max-height: 100%;
  min-width: 100%;

  object-fit: cover;
  vertical-align: bottom;

  border-radius: 4px;
`;
