import React, { useState } from "react";
import { Tab } from "@gotitinc/design-system";

const TabBar = () => {
  const [current, setCurrent] = useState("tab_1");
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
