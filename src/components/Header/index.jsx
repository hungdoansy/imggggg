import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Button, Avatar } from "@gotitinc/design-system";
import { TabBar } from "../TabBar";
import { LoginModal } from "../LoginModal";
import { SignupModal } from "../SignupModal";
import { useAuthContext } from "../../context/auth";

const useLoginModal = () => {
  const [isLoginModalOpen, setModalOpen] = useState(false);

  const showLoginModal = () => {
    setModalOpen(true);
  };

  const hideLoginModal = () => {
    setModalOpen(false);
  };

  return [isLoginModalOpen, showLoginModal, hideLoginModal];
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
  const hasBeenAuthenticated = !!authTokens && authTokens !== "";
  console.log("hasBeenAuthenticated", hasBeenAuthenticated);
  const [isLoginModalOpen, showLoginModal, hideLoginModal] = useLoginModal();
  const [
    isSignupModalOpen,
    showSignupModal,
    hideSignupModal,
  ] = useSignupModal();

  const logOut = (e) => {
    setAuthTokens("");
    e.preventDefault();
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
                <Button variant="primary_outline" onClick={showLoginModal}>
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
              <a href="/" onClick={logOut}>
                <Avatar />
              </a>
            )}
          </Header.Right>
        </Header.Main>
      </Header>

      {/* TODO: show/hide the tab bar based on auth status (localStorage) */}
      <TabBar />

      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          show={showLoginModal}
          hide={hideLoginModal}
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

export { MyHeader as Header };
