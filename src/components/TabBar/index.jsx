import React, { useState } from "react";
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

const TabBar = () => {
  const [current, setCurrent] = useState("tab_1");

  const tabs = categories.map((c, i) => {
    return (
      <Tab.Item key={i} eventKey={`tab_${i}`}>
        {c}
      </Tab.Item>
    );
  });
  return (
    <div className="Container Container--fluid">
      <Tab current={current} onSelect={setCurrent}>
        <Tab.Item eventKey="tab_1">Nature</Tab.Item>
        <Tab.Item eventKey="tab_2">House</Tab.Item>
        <Tab.Item eventKey="tab_3">Color</Tab.Item>
      </Tab>
    </div>
  );
};

export { TabBar };
