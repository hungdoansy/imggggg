import React, { useState } from "react";
import produce from "immer";
import { Button, Modal, Form, toast, Icon } from "@gotitinc/design-system";

import { submitPhoto } from "../../utils/apis/photo";
import { validators } from "../../utils/validators";

import { useSafeSetState, useDebounce } from "../../utils/hooks";
import { useAuthContext } from "../../context/auth";

export const useSubmitModal = () => {
  const [isSubmitModalOpen, setModalOpen] = useState(false);

  const showSubmitModal = () => {
    setModalOpen(true);
  };

  const hideSubmitModal = () => {
    setModalOpen(false);
  };

  return [isSubmitModalOpen, showSubmitModal, hideSubmitModal];
};

export const SubmitPhotoModal = ({
  isOpen,
  show,
  hide,
  categoryId,
  categoryName,
}) => {
  const { authTokens } = useAuthContext();

  const [state, setState] = useSafeSetState({
    description: {
      value: "",
      feedback: "",
    },
    imageUrl: {
      value: "",
      feedback: "",
    },
    feedback: "",
  });

  const [disabled, setDisabled] = useState(false);
  const checkDisabled = useDebounce(() => {
    const shouldBeDisabled =
      state.imageUrl.feedback !== "" || state.description.feedback !== "";
    setDisabled(shouldBeDisabled);
  }, 800);
  checkDisabled();

  const setValue = (which, value) => {
    setState(
      produce(state, (draft) => {
        const check = validators[which](value);

        draft[which].value = value;
        draft[which].feedback = check.passed ? "" : check.message;
      })
    );
  };

  const onInputChange = (e) => {
    const { name: which, value } = e.target;

    setValue(which, value);
  };

  const onClick = () => {
    setDisabled(true);

    const info = {
      description: state.description.value,
      imageUrl: state.imageUrl.value,
    };

    submitPhoto(categoryId, info, authTokens).then((response) => {
      switch (response.status) {
        case 400: {
          setState(
            produce(state, (draftState) => {
              const { message } = response.data;

              if (message.image_url) {
                draftState.imageUrl.feedback = message.image_url.join(" ");
              }

              if (message.description) {
                draftState.description.feedback = message.description.join(" ");
              }
            })
          );

          break;
        }

        case 201: {
          hide();
          toast(() => (
            <div className="u-flex u-flexGrow-1 u-cursorDefault">
              <div className="u-marginRightExtraSmall">
                <Icon name="checkmarkCircle" size="medium" />
              </div>
              <div className="u-flexGrow-1">
                <div className="u-fontMedium u-marginBottomExtraSmall">
                  Yeahhhhh !
                </div>
                <div>Your photo has just been submitted !</div>
              </div>
            </div>
          ));

          break;
        }

        default: {
          hide();

          toast.error(() => (
            <div className="u-flex u-flexGrow-1 u-cursorDefault">
              <div className="u-marginRightExtraSmall">
                <Icon name="alert" size="medium" />
              </div>
              <div className="u-flexGrow-1">
                <div className="u-fontMedium u-marginBottomExtraSmall">
                  Error
                </div>
                <div>Please reload and try again</div>
              </div>
            </div>
          ));
          break;
        }
      }
    });
  };

  return (
    <>
      <Modal show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Your photo shall be published{" "}
            <span role="img" aria-label="">
              🥳
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="submitform.category">
            <Form.Label>Category</Form.Label>
            <Form.Input type="text" readOnly defaultValue={categoryName} />
          </Form.Group>
          <Form.Group controlId="submitform.url">
            <Form.Label>URL</Form.Label>
            <Form.Input
              type="text"
              name="imageUrl"
              placeholder="Link to your photo"
              value={state.imageUrl.value}
              onChange={onInputChange}
              isInvalid={state.imageUrl.feedback !== ""}
            />
            <Form.Feedback type="invalid">
              {state.imageUrl.feedback}
            </Form.Feedback>
          </Form.Group>

          <Form.Group controlId="submitform.description">
            <Form.Label>Description</Form.Label>
            <Form.Input
              as="textarea"
              rows={3}
              name="description"
              placeholder="..."
              value={state.description.value}
              onChange={onInputChange}
              isInvalid={state.description.feedback !== ""}
            />
            <Form.Feedback type="invalid">
              {state.description.feedback}
            </Form.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <div className="u-flexGrow-1">
            <Button
              variant="primary"
              width="full"
              className="u-fontBold"
              onClick={onClick}
              disabled={disabled}
            >
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
