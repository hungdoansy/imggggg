import React from "react";
import styled from "styled-components";

const DescriptionIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill="currentColor"
      style={{ color: "inherit" }}
    >
      <g>
        <rect fill="none" height="24" width="24" />
        <g>
          <path d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
        </g>
        <path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
      </g>
    </svg>
  );
};

const ImageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill="currentColor"
      style={{ color: "inherit" }}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
    </svg>
  );
};

const CategoryInfoView = ({ className, hasSignedIn }) => {
  return (
    <div className={className}>
      <div className="category-name">
        <p className="u-text1150 u-textDark">Category name</p>
      </div>

      <div className="category-description">
        <div>
          <div className="icon-container u-textGray">
            <DescriptionIcon />
          </div>
        </div>
        <div>
          <p className="u-textGray u-text400">
            Category description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quos tenetur, eos veritatis nihil fugit ut
            voluptatem nulla iste odit hic. Perspiciatis dolorem ratione sint
            accusantium aspernatur soluta facere esse consequatur!
          </p>
        </div>
      </div>

      <div className="category-stats">
        <div>
          <div className="icon-container u-textGray">
            <ImageIcon />
          </div>
        </div>
        <div>
          <p className="u-textGray u-text400">
            100 <span>contributions</span>
          </p>
        </div>
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

  > div ~ div {
    margin-top: 15px;
  }

  > div.category-description {
    display: flex;
    flex-direction: row;
  }

  > div.category-stats {
    display: flex;
    flex-direction: row;
  }

  div.icon-container {
    width: 40px;
    height: 40px;

    margin-right: 10px;
  }
`;

/**
 * display: flex;
    flex-direction: row;

    margin-bottom: 50px;

    > div:nth-child(1) {
      p.category-name {
        font-size: 45px;
        font-weight: bold;
      }

      p.category-description {
      }
    }

    > div:nth-child(2) {
      flex: 1 0 200px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      div {
        width: 100%;
        text-align: center;
      }

      div.category-stats {
        flex: 1 1 100%;
        margin-bottom: 7px;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      div.submit-box {
        flex-shrink: 0;

        padding-bottom: 5px;

        cursor: pointer;

        > button {
          padding: calc(0.375rem - 1px) 0.7rem;
          background-color: transparent;
          border-radius: 4px;

          transition: all 0.15s ease-in-out;

          user-select: none;
        }
      }
    }
 */
