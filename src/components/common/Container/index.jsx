import React from "react";
import styled from "styled-components";

const ContainerView = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="Container">{children}</div>
    </div>
  );
};

export default styled(ContainerView)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
