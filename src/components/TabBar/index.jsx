import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Tab, toast, Icon } from "@gotitinc/design-system";
import { Link } from "react-router-dom";
import { CreateCategoryModal, useCreateModal } from "../CreateCategoryModal";
import { selectors } from "../../reducers";
import { useAuthContext } from "../../context/auth";

const SeparatorView = ({ className }) => {
  return <div className={className}></div>;
};

const Separator = styled(SeparatorView)`
  background-color: #d1d1d1;
  width: 1px;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-shrink: 0;

  margin-right: 15px;
  margin-left: 15px;
`;

const TabBarView = ({ className }) => {
  const { hasSignedIn } = useAuthContext();
  // const categories = useSelector((state) =>
  //   selectors.getCategoriesByPageNumber()
  // );

  const categories = [];

  // TODO: set the current page
  const [current, setCurrent] = useState("tab_0");

  const [
    isCreateModalOpen,
    showCreateModal,
    hideCreateModal,
  ] = useCreateModal();

  const tabs = categories.map((c, i) => {
    return (
      <Tab.Item key={i} eventKey={c.name}>
        <Link to={`/categories/${c.id}/items`}>{c.name}</Link>
      </Tab.Item>
    );
  });

  const onClickCreateCategory = () => {
    if (hasSignedIn) {
      showCreateModal();
    } else {
      toast.info(
        () => (
          <div className="u-flex u-flexGrow-1">
            <div className="u-marginRightExtraSmall">
              <Icon name="informationCircle" size="medium" />
            </div>
            <div className="u-flexGrow-1">
              <div className="u-fontMedium u-marginBottomExtraSmall">
                A friendly reminder
              </div>
              <div>Please sign in to create a category</div>
            </div>
          </div>
        ),
        {}
      );
    }
  };

  return (
    <div className={"Container Container--fluid " + className}>
      <div className="u-paddingVerticalExtraSmall create-box">
        <button
          className="u-fontMedium u-border u-borderPrimary u-roundedMedium u-cursorPointer u-text200 u-textPrimary"
          onClick={onClickCreateCategory}
        >
          Create
        </button>
      </div>
      <Separator />
      <div className="tabs">
        <Tab current={current} onSelect={setCurrent}>
          {tabs}
        </Tab>
      </div>
      <Separator />
      <div
        className={`
          u-paddingVerticalExtraSmall u-textGray hover:u-textPrimary 
          u-fontMedium u-text200 u-textUnderline view-all
        `}
      >
        <Link to="/categories">
          <span> View all</span>
        </Link>
      </div>

      {isCreateModalOpen && (
        <CreateCategoryModal
          isOpen={isCreateModalOpen}
          show={showCreateModal}
          hide={hideCreateModal}
        />
      )}
    </div>
  );
};

const TabBar = styled(TabBarView)`
  display: flex;
  height: 50px;

  > div {
    overflow-x: hidden;

    &.create-box {
      flex-shrink: 0;
      cursor: pointer;

      > button {
        padding: calc(0.375rem - 1px) 0.7rem;

        transition: all 0.15s ease-in-out;

        user-select: none;
        cursor: pointer;

        border-radius: 4px;

        background-color: transparent;
      }
    }

    &.tabs {
      flex-grow: 1;
      overflow-x: scroll;

      /* Hide the scroll bar */
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;

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

      display: flex;
      flex-direction: column;
      justify-content: center;

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
