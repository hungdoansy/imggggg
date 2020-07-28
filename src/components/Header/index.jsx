import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Header,
  Logo,
  Button,
  SafeAnchor,
  Avatar,
} from "@gotitinc/design-system";
import { TabBar } from "../TabBar";
import { LoginModal } from "../LoginModal";
import { SignupModal } from "../SignupModal";
import { useAuth } from "../../context/auth";

const LOGIN = "login";
const SIGNUP = "signup";

const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

const useLoginModal = () => {
  const queryParams = useQueryParams();

  const [isLoginModalOpen, setModalOpen] = useState(() => {
    if (queryParams.get("action") === LOGIN) {
      return true;
    }

    return false;
  });

  const showLoginModal = () => {
    setModalOpen(true);
  };

  const hideLoginModal = () => {
    setModalOpen(false);
  };

  return [isLoginModalOpen, showLoginModal, hideLoginModal];
};

const useSignupModal = () => {
  const queryParams = useQueryParams();

  const [isSignupModalOpen, setModalOpen] = useState(() => {
    if (queryParams.get("action") === SIGNUP) {
      return true;
    }

    return false;
  });

  const showSignupModal = () => {
    setModalOpen(true);
  };

  const hideSignupModal = () => {
    setModalOpen(false);
  };

  return [isSignupModalOpen, showSignupModal, hideSignupModal];
};

const MyHeader = () => {
  const { authTokens, setAuthTokens } = useAuth();
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

  return (
    <div className="u-shadowSmall u-marginBottomSmall">
      <Header fullWidth className="u-paddingVerticalMedium">
        <Header.Brand>
          <Logo as={SafeAnchor} name="gotit" variant="original" height={40} />
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
