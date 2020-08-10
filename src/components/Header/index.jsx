import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Button, Dropdown, Icon } from "@gotitinc/design-system";

import { useAuthContext } from "context/auth";

import TabBar from "./TabBar";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";

const useSigninModal = () => {
  const [isSigninModalOpen, setModalOpen] = useState(false);

  const showSigninModal = () => {
    setModalOpen(true);
  };

  const hideSigninModal = () => {
    setModalOpen(false);
  };

  return [isSigninModalOpen, showSigninModal, hideSigninModal];
};

const useSignupModal = () => {
  const [isSignupModalOpen, setModalOpen] = useState(false);

  const showSignupModal = () => {
    setModalOpen(true);
  };

  const hideSignupModal = () => {
    setModalOpen(false);
  };

  return [isSignupModalOpen, showSignupModal, hideSignupModal];
};

const MyHeader = () => {
  const { authTokens, signOut } = useAuthContext();

  const hasBeenAuthenticated = !!authTokens && authTokens !== "";

  const [
    isSigninModalOpen,
    showSigninModal,
    hideSigninModal,
  ] = useSigninModal();
  const [
    isSignupModalOpen,
    showSignupModal,
    hideSignupModal,
  ] = useSignupModal();

  const onClickSignOut = (e) => {
    signOut();
    e.preventDefault();
  };

  // NOTE: Logo from Gotit doesn't come with a "to" property
  return (
    <div className="u-shadowSmall u-marginBottomSmall">
      <Header fullWidth className="u-paddingVerticalMedium">
        <Header.Brand>
          <Link to="/hehe">
            <img
              height="40"
              src="https://designsystem-cdn.got-it.ai/images/original.10cfcf79.svg"
              alt="Got It"
              className="u-maxWidthFull"
            />
          </Link>
        </Header.Brand>
        <Header.Main>
          <Header.Right>
            {!hasBeenAuthenticated ? (
              <>
                <Button variant="primary_outline" onClick={showSigninModal}>
                  Login
                </Button>
                <Button
                  variant="primary"
                  className="u-marginLeftSmall"
                  onClick={showSignupModal}
                >
                  Sign up
                </Button>
              </>
            ) : (
              <Dropdown alignRight>
                <Dropdown.Toggle className="u-textLight u-lineHeightNone">
                  <Icon name="contact" size="medium" />
                </Dropdown.Toggle>
                <Dropdown.Container
                  className="u-paddingVerticalExtraSmall"
                  additionalStyles={{
                    transform: "translate3d(-51px, 28px, 0px)",
                    minWidth: "auto",
                    paddingBottom: 0,
                    paddingTop: 0,
                  }}
                >
                  <Dropdown.Item
                    onClick={onClickSignOut}
                    style={{
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "400" }}>
                      Logout
                    </span>
                  </Dropdown.Item>
                </Dropdown.Container>
              </Dropdown>
            )}
          </Header.Right>
        </Header.Main>
      </Header>

      <TabBar />

      {isSigninModalOpen && (
        <SigninModal
          isOpen={isSigninModalOpen}
          show={showSigninModal}
          hide={hideSigninModal}
        />
      )}

      {isSignupModalOpen && (
        <SignupModal
          isOpen={isSignupModalOpen}
          show={showSignupModal}
          hide={hideSignupModal}
        />
      )}
    </div>
  );
};

export default MyHeader;
