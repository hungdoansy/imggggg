import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header, Logo, Button, SafeAnchor } from "@gotitinc/design-system";
import { TabBar } from "../TabBar";
import { LoginModal } from "../LoginModal";

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

const MyHeader = () => {
  const hasBeenAuthenticated = false;
  const [isLoginModalOpen, showLoginModal, hideLoginModal] = useLoginModal();

  return (
    <div className="u-shadowSmall u-marginBottomSmall">
      <Header fullWidth className="u-paddingVerticalMedium">
        <Header.Brand>
          <Logo as={SafeAnchor} name="gotit" variant="original" height={40} />
        </Header.Brand>
        <Header.Main>
          {!hasBeenAuthenticated && (
            <Header.Right>
              <Button variant="primary_outline" onClick={showLoginModal}>
                Login
              </Button>
              <Button
                variant="primary"
                className="u-marginLeftSmall"
                onClick={showLoginModal}
              >
                Sign up
              </Button>
            </Header.Right>
          )}
        </Header.Main>
      </Header>

      {/* TODO: show/hide the tab bar based on auth status (localStorage) */}
      <TabBar />

      <LoginModal
        isOpen={isLoginModalOpen}
        show={showLoginModal}
        hide={hideLoginModal}
      />
    </div>
  );
};

export { MyHeader as Header };
