import React, { useState } from "react";
import styled from "styled-components";
import { Tab } from "@gotitinc/design-system";
import { categories } from "../../mocks";
import { Link } from "react-router-dom";

const SeparatorView = ({ className }) => {
  return <div className={className}></div>;
};

const Separator = styled(SeparatorView)`
  background-color: #d1d1d1;
  width: 1px;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-shrink: 0;
`;

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
      <div className="tabs">
        <Tab current={current} onSelect={setCurrent}>
          {tabs}
        </Tab>
      </div>
      <Separator />
      <div
        className={`
          u-paddingVerticalExtraSmall u-paddingLeftMedium u-textGray hover:u-textPrimary 
          u-fontMedium u-text200 u-textUnderline view-all
        `}
      >
        <Link to="/categories">
          <span> View all</span>
        </Link>
      </div>
    </div>
  );
};

const TabBar = styled(TabBarView)`
  display: flex;
  > div {
    overflow-x: hidden;

    &.tabs {
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

    &.view-all {
      flex-shrink: 0;

      > a {
        cursor: pointer;
        text-underline-position: under;
        color: inherit;
        text-decoration-color: currentColor;
      }
    }
  }
`;

export { TabBar };
