import React, { useState } from "react";
import produce from "immer";
import { Button, Modal, Form } from "@gotitinc/design-system";
import { useDispatch, useSelector } from "react-redux";

import { editPhoto, submitPhoto } from "utils/apis/photo";
import { photoValidator } from "utils/validators";
import { useSafeSetState, useDebounce, useHashParams } from "utils/hooks";
import { useAuthContext } from "context/auth";
import { fetchPhotoDetail, fetchPhotos } from "actions/photo";
import { toastDefault, toastError } from "utils/toast";
import { selectors } from "reducers";
import { Modals } from "constants/action.types";
import { showModal, hideModal } from "actions/app";

const Types = {
  EDIT: "EDIT",
  SUBMIT: "SUBMIT",
};

const internalData = {
  EDIT: {
    title: "Edit your photo 😎",
    footer: "EDIT",
    pastVerb: "edited",
    action: editPhoto,
  },

  SUBMIT: {
    title: "Your photo shall be published 🥳",
    footer: "SUBMIT",
    pastVerb: "submitted",
    action: submitPhoto,
  },
};

const useEditModal = () => {
  const dispatch = useDispatch();

  const currentOpenModal = useSelector(selectors.getOpenModal);
  const isOpen = currentOpenModal === Modals.EDIT;

  const show = () => {
    dispatch(showModal(Modals.EDIT));
  };

  const hide = () => {
    dispatch(hideModal(Modals.EDIT));
  };

  return [isOpen, show, hide];
};

const useSubmitModal = () => {
  const dispatch = useDispatch();

  const currentOpenModal = useSelector(selectors.getOpenModal);
  const isOpen = currentOpenModal === Modals.SUBMIT;

  const show = () => {
    dispatch(showModal(Modals.SUBMIT));
  };

  const hide = () => {
    dispatch(hideModal(Modals.SUBMIT));
  };

  return [isOpen, show, hide];
};

const EditOrSubmitPhotoModal = ({
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
  const hashParams = useHashParams();

  const [state, setState] = useSafeSetState({
    description: {
      value: photoInfo ? photoInfo.description : "",
      feedback: "",
    },
    imageUrl: {
      value: photoInfo ? photoInfo.src : "",
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
        const check = photoValidator[which](value);

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
      id: photoInfo ? photoInfo.id : null,
      description: state.description.value,
      imageUrl: state.imageUrl.value,
    };

    internalData[type].action(categoryId, info, authTokens).then((response) => {
      switch (response.status) {
        case 400: {
          setState(
            produce(state, (draftState) => {
              const { error } = response.data;

              if (error.image_url) {
                draftState.imageUrl.feedback = error.image_url.join(" ");
              }

              if (error.description) {
                draftState.description.feedback = error.description.join(" ");
              }
            })
          );

          break;
        }

        case 200:
        case 201: {
          if (type === Types.EDIT) {
            dispatch(fetchPhotoDetail(categoryId, photoInfo.id));
          } else if (type === Types.SUBMIT) {
            dispatch(fetchPhotos(categoryId, hashParams.getPage()));
          }

          toastDefault(
            "Yeahhhhh !",
            `Your photo has just been ${internalData[type].pastVerb} !`
          );

          hide();

          break;
        }

        default: {
          hide();
          toastError();

          break;
        }
      }
    });
  };

  return (
    <>
      <Modal show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>{internalData[type].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="submitform.category">
            <Form.Label>Category</Form.Label>
            <Form.Input readOnly type="text" defaultValue={categoryName} />
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
              id="actionButton"
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

const EditPhotoModal = (props) => {
  return <EditOrSubmitPhotoModal type={Types.EDIT} {...props} />;
};

const SubmitPhotoModal = (props) => {
  return <EditOrSubmitPhotoModal type={Types.SUBMIT} {...props} />;
};

export { useEditModal, useSubmitModal, EditPhotoModal, SubmitPhotoModal };
