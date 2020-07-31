import React from "react";
import styled from "styled-components";

const ContainerView = ({ className, children }) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export const Container = styled(ContainerView)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    @media (min-width: 576px) {
      width: 500px;
    }

    @media (min-width: 768px) {
      width: 700px;
    }

    @media (min-width: 992px) {
      width: 800px;
    }

    @media (min-width: 1200px) {
      width: 1200px;
    }
  }
`;
