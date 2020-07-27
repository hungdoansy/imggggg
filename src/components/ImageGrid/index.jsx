import React from "react";
import { Image } from "./Image";
import styled from "styled-components";
import { images } from "../../mocks";

const imageCreator = (images) => {
  return images.map(({ src, alt }, i) => (
    <li key={i}>
      <Image src={src} alt={alt} loading="lazy" />
    </li>
  ));
};

const ImageGridView = ({ className }) => {
  return (
    <div className={className + " Container Container--fluid"}>
      <ul>
        {imageCreator(images)}
        <li></li>
      </ul>
    </div>
  );
};

export const ImageGrid = styled(ImageGridView)`
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
