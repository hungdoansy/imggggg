import React from "react";
import styled from "styled-components";
import { CategoryCell } from "./CategoryCell";

const CategoryGridView = ({ className }) => {
  return (
    <div className={"Container Container--fluid " + className}>
      <CategoryCell
        imageUrl={
          "https://images.unsplash.com/photo-1595831888313-fb478bd3dbf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
        id={1}
        name="berries"
        description={"Berries"}
      />
    </div>
  );
};

export const CategoryGrid = styled(CategoryGridView)`
  margin-left: -6px;
  margin-right: -6px;

  > ${CategoryCell} {
    margin-left: 6px;
    margin-right: 6px;
  }
`;
