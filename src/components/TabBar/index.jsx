import React, { useState } from "react";
import styled from "styled-components";
import { Tab } from "@gotitinc/design-system";

const categories = [
  "Altars",
  "Arches",
  "Atriums",
  "Balconies and Porches",
  "Bas Reliefs",
  "Bells",
  "Ceilings",
  "Smoke Stacks",
  "Cloisters",
  "Columns",
  "Corridors",
  "Courtyards",
  "Crosses",
  "Decorative Pools",
  "Domes",
  "Doors",
  "Facades",
  "Galleries",
  "Gates",
  "Grids",
  "Kivas",
  "Ladders",
  "Moats",
  "Mural Decor",
  "Roofs",
  "Stained Glass",
  "Staircases",
  "Stupas",
  "Tombs",
  "Tumulus",
  "Walls",
  "Water Wheels",
  "Windows",
];

const TabBarView = ({ className }) => {
  const [current, setCurrent] = useState("tab_1");

  const tabs = categories.map((c, i) => {
    return (
      <Tab.Item key={i} eventKey={`tab_${i}`}>
        {c}
      </Tab.Item>
    );
  });
  return (
    <div className={"Container Container--fluid " + className}>
      <div>
        <Tab current={current} onSelect={setCurrent}>
          <Tab.Item eventKey="tab_1" style={{ whiteSpace: "nowrap" }}>
            Nature
          </Tab.Item>
          <Tab.Item eventKey="tab_2">House</Tab.Item>
          <Tab.Item eventKey="tab_3">Color</Tab.Item>
          {tabs}
        </Tab>
      </div>
      <div className="u-flexGrow-1 u-paddingVerticalExtraSmall u-paddingLeftMedium u-textGray hover:u-textPrimary u-fontMedium u-text200 u-textUnderline">
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

      > div > div {
        white-space: nowrap;
      }
    }

    &:nth-child(2) {
      flex-shrink: 0;

      > span {
        text-underline-position: under;
      }
    }
  }
`;

export { TabBar };
