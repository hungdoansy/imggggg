import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import { Button, Modal, Form } from "@gotitinc/design-system";

import { createCategory } from "utils/apis/category";
import { useSafeSetState, useDebounce } from "utils/hooks";
import { categoryValidator } from "utils/validators";
import { useAuthContext } from "context/auth";
import { fetchCategoriesForTabBar } from "actions/category";
import { toastDefault, toastError } from "utils/toast";
import { selectors } from "reducers";
import { Modals } from "constants/action.types";
import { showModal, hideModal } from "actions/app";

export const useCreateModal = () => {
  const dispatch = useDispatch();

  const currentOpenModal = useSelector(selectors.getOpenModal);
  const isOpen = currentOpenModal === Modals.CREATE;

  const show = () => {
    dispatch(showModal(Modals.CREATE));
  };

  const hide = () => {
    dispatch(hideModal(Modals.CREATE));
  };

  return [isOpen, show, hide];
};

const CreateCategoryModal = ({ isOpen, show, hide }) => {
  const dispatch = useDispatch();
  const { authTokens } = useAuthContext();

  const [state, setState] = useSafeSetState({
    name: {
      value: "",
      feedback: "",
    },
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
      state.feedback !== "" ||
      state.name.feedback !== "" ||
      state.imageUrl.feedback !== "" ||
      state.description.feedback !== "";
    setDisabled(shouldBeDisabled);
  }, 800);
  checkDisabled();

  const setValue = (which, value) => {
    setState(
      produce(state, (draft) => {
        draft.feedback = "";

        const check = categoryValidator[which](value);

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
    const info = {
      name: state.name.value,
      description: state.description.value,
      imageUrl: state.imageUrl.value,
    };

    createCategory(info, authTokens).then((response) => {
      switch (response.status) {
        case 400: {
          setDisabled(true);
          setState(
            produce(state, (draftState) => {
              if (typeof response.data.error === "string") {
                draftState.feedback = response.data.error;
              } else if (typeof response.data.error === "object") {
                const { error } = response.data;

                if (error.name) {
                  draftState.name.feedback = error.name[0];
                }

                if (error.image_url) {
                  draftState.imageUrl.feedback = error.image_url[0];
                }

                if (error.description) {
                  draftState.description.feedback = error.description[0];
                }
              }
            })
          );

          break;
        }

        case 201: {
          hide();
          dispatch(fetchCategoriesForTabBar());
          toastDefault(
            "Yeahhhhh !",
            `Category ${state.name.value} has just been created`
          );

          break;
        }

        default: {
          hide();
          toastError("Please reload and try again");

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
            Create a new category{" "}
            <span role="img" aria-label="">
              🥰
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="createform.name">
            <Form.Label>Name</Form.Label>
            <Form.Input
              type="text"
              placeholder="The category's name"
              value={state.name.value}
              onChange={onInputChange}
              name="name"
              isInvalid={state.name.feedback !== ""}
            />
            <Form.Feedback type="invalid">{state.name.feedback}</Form.Feedback>
          </Form.Group>

          <Form.Group controlId="createform.url">
            <Form.Label>Image URL</Form.Label>
            <Form.Input
              type="text"
              placeholder="Link to a featuring photo"
              value={state.imageUrl.value}
              onChange={onInputChange}
              name="imageUrl"
              isInvalid={state.imageUrl.feedback !== ""}
            />
            <Form.Feedback type="invalid">
              {state.imageUrl.feedback}
            </Form.Feedback>
          </Form.Group>

          <Form.Group controlId="createform.description">
            <Form.Label>Description</Form.Label>
            <Form.Input
              as="textarea"
              rows={3}
              placeholder="..."
              value={state.description.value}
              onChange={onInputChange}
              name="description"
              isInvalid={state.description.feedback !== ""}
            />
            <Form.Feedback type="invalid">
              {state.description.feedback}
            </Form.Feedback>
          </Form.Group>

          {state.feedback !== "" && (
            <div className="u-marginTopTiny u-widthFull u-text100 invalid-feedback is-visible">
              {state.feedback}
            </div>
          )}
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
              Create
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateCategoryModal;
