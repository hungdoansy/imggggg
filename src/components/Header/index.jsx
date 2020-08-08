import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Button, Dropdown, Icon } from "@gotitinc/design-system";
import TabBar from "./components/TabBar";
import SigninModal from "./components/SigninModal";
import SignupModal from "./components/SignupModal";
import { useAuthContext } from "../../context/auth";

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
  const { authTokens, setAuthTokens } = useAuthContext();
  const { storeProfile } = useAuthContext();

  const hasBeenAuthenticated = !!authTokens && authTokens !== "";
  console.log("hasBeenAuthenticated", hasBeenAuthenticated);
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

  const signOut = (e) => {
    setAuthTokens("");
    storeProfile("");

    e.preventDefault();

    // TODO: is this needed?
    window.location.reload();
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
                    onClick={signOut}
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
              // <a href="/" onClick={signOut}>
              //   <Avatar />
              // </a>
            )}
          </Header.Right>
        </Header.Main>
      </Header>

      {/* TODO: show/hide the tab bar based on auth status (localStorage) */}
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
