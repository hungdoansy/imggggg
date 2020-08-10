import React from "react";
import { toast, Icon } from "@gotitinc/design-system";

export const toastDefault = (title, body) => {
  toast(() => (
    <div className="u-flex u-flexGrow-1 u-cursorDefault">
      <div className="u-marginRightExtraSmall">
        <Icon name="checkmarkCircle" size="medium" />
      </div>
      <div className="u-flexGrow-1">
        <div className="u-fontMedium u-marginBottomExtraSmall">{title}</div>
        <div>{body}</div>
      </div>
    </div>
  ));
};

export const toastError = (body = "Please reload and try again") => {
  toast.error(() => (
    <div className="u-flex u-flexGrow-1 u-cursorDefault">
      <div className="u-marginRightExtraSmall">
        <Icon name="alert" size="medium" />
      </div>
      <div className="u-flexGrow-1">
        <div className="u-fontMedium u-marginBottomExtraSmall">Error</div>
        <div>{body}</div>
      </div>
    </div>
  ));
};

export const toastInfo = (title, body) => {
  toast.info(
    () => (
      <div className="u-flex u-flexGrow-1">
        <div className="u-marginRightExtraSmall">
          <Icon name="informationCircle" size="medium" />
        </div>
        <div className="u-flexGrow-1">
          <div className="u-fontMedium u-marginBottomExtraSmall">{title}</div>
          <div>{body}</div>
        </div>
      </div>
    ),
    {}
  );
};
