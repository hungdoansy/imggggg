import React, { useState } from "react";
import produce from "immer";
import { Button, Modal, Form, toast, Icon } from "@gotitinc/design-system";

import { editPhoto, submitPhoto } from "../../utils/apis/photo";
import { validators } from "../../utils/validators";

import { useSafeSetState, useDebounce } from "../../utils/hooks";
import { useAuthContext } from "../../context/auth";
import { useDispatch } from "react-redux";
import { fetchPhotoDetail } from "../../actions/photo";

export const Types = {
  EDIT: "EDIT",
  SUBMIT: "SUBMIT",
};

const internalData = {
  EDIT: {
    header: "Edit your photo 😎",
    footer: "EDIT",
    pastVerb: "edited",
    action: editPhoto,
  },

  SUBMIT: {
    header: "Your photo shall be published 🥳",
    footer: "SUBMIT",
    pastVerb: "submitted",
    action: submitPhoto,
  },
};

export const useEditOrSubmitModal = () => {
  const [isEditOrSubmitModalOpen, setModalOpen] = useState(false);

  const showEditOrSubmitModal = () => {
    setModalOpen(true);
  };

  const hideEditOrSubmitModal = () => {
    setModalOpen(false);
  };

  return [
    isEditOrSubmitModalOpen,
    showEditOrSubmitModal,
    hideEditOrSubmitModal,
  ];
};

export const EditOrSubmitPhotoModal = ({
  type,
  isOpen,
  show,
  hide,
  categoryId,
  categoryName,
  photoInfo,
}) => {
  const { authTokens } = useAuthContext();
  const dispatch = useDispatch();

  const [state, setState] = useSafeSetState({
    description: {
      value: photoInfo.description,
      feedback: "",
    },
    imageUrl: {
      value: photoInfo.src,
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
      id: photoInfo.id,
      description: state.description.value,
      imageUrl: state.imageUrl.value,
    };

    internalData[type].action(categoryId, info, authTokens).then((response) => {
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

        case 200:
        case 201: {
          dispatch(fetchPhotoDetail(categoryId, photoInfo.id));

          toast(() => (
            <div className="u-flex u-flexGrow-1 u-cursorDefault">
              <div className="u-marginRightExtraSmall">
                <Icon name="checkmarkCircle" size="medium" />
              </div>
              <div className="u-flexGrow-1">
                <div className="u-fontMedium u-marginBottomExtraSmall">
                  Yeahhhhh !
                </div>
                <div>
                  Your photo has just been {internalData[type].pastVerb} !
                </div>
              </div>
            </div>
          ));

          hide();

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
          <Modal.Title>{internalData[type].header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="submitform.category">
            <Form.Label>Category</Form.Label>
            <Form.Input
              type="text"
              defaultValue={categoryName}
              readOnly={type === Types.EDIT}
            />
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
              {internalData[type].footer}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
