import React, { useState } from "react";
import styled from "styled-components";
import { Tab } from "@gotitinc/design-system";
import { categories } from "../../mocks";
import { Link } from "react-router-dom";

const TabBarView = ({ className }) => {
  const [current, setCurrent] = useState("tab_0");

  const tabs = categories.allIds.map((cId, i) => {
    const category = categories.detailByCategoryId[cId];
    return (
      <Tab.Item key={i} eventKey={`tab_${i}`}>
        <Link to={`/categories/${category.id}/items`}>{category.name}</Link>
      </Tab.Item>
    );
  });
  return (
    <div className={"Container Container--fluid " + className}>
      <div>
        <Tab current={current} onSelect={setCurrent}>
          {tabs}
        </Tab>
      </div>
      <div className="u-paddingVerticalExtraSmall u-paddingLeftMedium u-textGray hover:u-textPrimary u-fontMedium u-text200 u-textUnderline">
        <span> View all</span>
      </div>
    </div>
  );
};

const TabBar = styled(TabBarView)`
  display: flex;
  > div {
    overflow-x: hidden;

    &:nth-child(1) {
      flex-grow: 1;
      overflow-x: scroll;

      /* Hide the scroll bar */
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }

      > div > div > div {
        > a {
          white-space: nowrap;
          text-decoration: none;
          color: inherit;
        }
      }
    }

    &:nth-child(2) {
      flex-shrink: 0;

      > span {
        cursor: pointer;
        text-underline-position: under;
      }
    }
  }
`;

export { TabBar };
