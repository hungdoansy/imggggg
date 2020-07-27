import React from "react";
import styled from "styled-components";

const ImageView = ({ className, src, alt }) => {
  return <img className={className} alt={alt} src={src}></img>;
};

export const Image = styled(ImageView)`
  max-height: 100%;
  min-width: 100%;

  object-fit: cover;
  vertical-align: bottom;

  border-radius: 4px;
`;
