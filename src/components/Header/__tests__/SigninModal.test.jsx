import React from "react";
import { render, fireEvent, act, wait } from "@testing-library/react";

import SigninModal from "../SigninModal";

const setTokensMockFn = jest.fn().mockReturnValue({ signIn: () => {} });
const FromAuthContext = require("utils/hooks");
FromAuthContext.useAuthContext = setTokensMockFn;

const signinMockFn = jest.fn().mockImplementation(({ email, password }) => {
  const user = {
    email: "someone1@somedomain.com",
    password: "12345678",
  };

  const existed = user.email === email && user.password === password;

  return new Promise((resolve, reject) => {
    if (existed) {
      resolve({
        status: 200,
        data: {
          access_token: "123456",
        },
      });
    } else {
      resolve({
        status: 400,
        data: {
          data: "Invalid email or password",
        },
      });
    }
  });
});
const FromAuthApis = require("utils/apis/auth");
FromAuthApis.signin = signinMockFn;

let getByText, getByPlaceholderText;
const showMockFn = jest.fn();
const hideMockFn = jest.fn();

describe("Signin Modal", () => {
  beforeEach(() => {
    ({ getByText, getByPlaceholderText } = render(
      <SigninModal isOpen={true} show={showMockFn} hide={hideMockFn} />
    ));
  });

  afterEach(() => {
    showMockFn.mockClear();
    hideMockFn.mockClear();
  });

  it("should render a title", () => {
    expect(getByText(/Welcome back to Imggggg/)).toBeInTheDocument();
  });

  it("should render an input for email", () => {
    expect(getByPlaceholderText(/Enter your email here/)).toBeInTheDocument();
  });

  it("should render an input for password", () => {
    expect(
      getByPlaceholderText(/Enter your password here/)
    ).toBeInTheDocument();
  });

  it("should render a button to submit", () => {
    const submitButton = document.querySelector("button.submit-button");
    expect(submitButton).not.toBeNull();
  });

  it("should disable the submit button if any input field is empty", () => {
    let submitButton = document.querySelector("button.submit-button");

    fireEvent.click(submitButton);

    submitButton = document.querySelector("button.submit-button");

    expect(
      document.querySelector("button[disabled].submit-button")
    ).not.toBeNull();
    expect(getByText(/Cannot leave any input empty !/)).toBeInTheDocument();
  });

  it("should render a feedback", () => {
    const emailInput = getByPlaceholderText(/Enter your email here/);

    expect(emailInput.value).toBe("");

    fireEvent.change(emailInput, { target: { value: "some email" } });
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(emailInput, { target: { value: "some email" } });
    fireEvent.change(emailInput, { target: { value: "" } });

    const feedback = getByText(/Cannot leave any input empty/);
    expect(feedback).toBeInTheDocument();
  });

  it("should trigger signin api on click", async () => {
    signinMockFn.mockClear();
    hideMockFn.mockClear();
    setTokensMockFn.mockClear();

    const emailInput = getByPlaceholderText(/Enter your email here/);
    const passwordInput = getByPlaceholderText(/Enter your password here/);
    const submitButton = document.querySelector("button.submit-button");

    fireEvent.change(emailInput, {
      target: { value: "someone1@somedomain.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    await wait(() => {
      act(() => {
        fireEvent.click(submitButton);
      });
    });

    expect(signinMockFn).toHaveBeenCalled();
    expect(hideMockFn).toHaveBeenCalled();
    expect(setTokensMockFn).toHaveBeenCalled();
  });

  it("should display feedback from response", async () => {
    signinMockFn.mockClear();
    hideMockFn.mockClear();
    setTokensMockFn.mockClear();

    const emailInput = getByPlaceholderText(/Enter your email here/);
    const passwordInput = getByPlaceholderText(/Enter your password here/);
    const submitButton = document.querySelector("button.submit-button");

    fireEvent.change(emailInput, {
      target: { value: "strange@somedomain.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    await wait(() => {
      act(() => {
        fireEvent.click(submitButton);
      });
    });

    expect(signinMockFn).toHaveBeenCalled();
    expect(getByText(/Invalid email or password/)).toBeInTheDocument();
  });
});
