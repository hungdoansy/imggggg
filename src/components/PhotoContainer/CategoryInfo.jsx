import React from "react";
import styled from "styled-components";

const CategoryInfoView = ({ className, name, description, total_items }) => {
  return (
    <div className={className}>
      <div className="category-name">
        <p className="u-text1150 u-textDark">{name}</p>
      </div>

      <div className="category-description">
        <p className="u-textGray u-text300">{description}</p>
      </div>

      <div className="category-stats">
        <p className="u-textGray u-text300">
          A total of <b>{total_items}</b> contributions by awesome people !
        </p>
      </div>
    </div>
  );
};

export const CategoryInfo = styled(CategoryInfoView)`
  display: flex;
  flex-direction: column;

  svg {
    width: 100%;
    height: 100%;
  }

  > div.category-name {
  }

  > div.category-description {
    display: flex;
    flex-direction: row;

    margin-top: 30px;
  }

  > div.category-stats {
    display: flex;
    flex-direction: row;

    margin-top: 10px;
  }
`;
