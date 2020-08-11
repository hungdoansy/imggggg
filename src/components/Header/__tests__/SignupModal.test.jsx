import React from "react";
import { render, fireEvent, wait, act } from "@testing-library/react";

import SignupModal from "../SignupModal";

const FromAuthContext = require("utils/hooks");
FromAuthContext.useAuthContext = jest
  .fn()
  .mockReturnValue({ signIn: () => {} });

const signupMockFn = jest.fn().mockImplementation(({ email, password }) => {
  const user = {
    email: "someone1@somedomain.com",
    password: "12345678",
  };

  const existed = user.email === email && user.password === password;

  return new Promise((resolve, reject) => {
    if (!existed) {
      resolve({
        status: 201,
      });
    } else {
      resolve({
        status: 400,
        data: {
          data: {
            email: ["Email existed"],
          },
        },
      });
    }
  });
});

const signinMockFn = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      data: {
        access_token: "123456",
      },
    });
  });
});
const FromAuthApis = require("utils/apis/auth");
FromAuthApis.signup = signupMockFn;
FromAuthApis.signin = signinMockFn;

let getByText, getByPlaceholderText;
const showMockFn = jest.fn();
const hideMockFn = jest.fn();

describe("Signup Modal", () => {
  beforeEach(() => {
    ({ getByText, getByPlaceholderText } = render(
      <SignupModal isOpen={true} show={showMockFn} hide={hideMockFn} />
    ));
  });

  afterEach(() => {
    showMockFn.mockClear();
    hideMockFn.mockClear();
  });

  it("should render a title", () => {
    expect(getByText(/Welcome to Imggggg/)).toBeInTheDocument();
  });

  it("should render an input for name", () => {
    expect(getByPlaceholderText(/What's your name/)).toBeInTheDocument();
  });

  it("should render a feedback for name", () => {
    const nameInput = getByPlaceholderText(/What's your name/);

    expect(nameInput.value).toBe("");

    fireEvent.change(nameInput, { target: { value: "a".repeat(32) } });

    const feedback = getByText(/name should be maximum of 30 characters/);
    expect(feedback).toBeInTheDocument();
  });

  it("should render an input for email", () => {
    expect(
      getByPlaceholderText(/Your email so we contact you/)
    ).toBeInTheDocument();
  });

  it("should render a feedback for email", () => {
    const emailInput = getByPlaceholderText(/Your email so we contact you/);

    expect(emailInput.value).toBe("");

    fireEvent.change(emailInput, { target: { value: "123456789" } });

    const feedback = getByText(/email should have proper format/);
    expect(feedback).toBeInTheDocument();
  });

  it("should render an input for password", () => {
    expect(getByPlaceholderText(/To secure your account/)).toBeInTheDocument();
  });

  it("should render a feedback for password", () => {
    const passwordInput = getByPlaceholderText(/To secure your account/);

    expect(passwordInput.value).toBe("");

    fireEvent.change(passwordInput, { target: { value: "1234" } });

    const feedback = getByText(/password should have at least 6 characters/);
    expect(feedback).toBeInTheDocument();
  });

  it("should render a button to submit", () => {
    const submitButton = document.querySelector("button.submit-button");
    expect(submitButton).not.toBeNull();
  });

  it("should disable the submit button if any input field is empty", async () => {
    let submitButton = document.querySelector("button.submit-button");

    await wait(() => {
      act(() => {
        fireEvent.click(submitButton);
      });
    });

    submitButton = document.querySelector("button.submit-button");

    expect(
      document.querySelector("button[disabled].submit-button")
    ).not.toBeNull();
    expect(getByText(/Cannot leave any input empty !/)).toBeInTheDocument();
  });

  it("should trigger signup apis on click", async () => {
    signupMockFn.mockClear();
    hideMockFn.mockClear();

    const nameInput = getByPlaceholderText(/What's your name\?/);
    const emailInput = getByPlaceholderText(/Your email so we contact you/);
    const passwordInput = getByPlaceholderText(/To secure your account/);
    const submitButton = document.querySelector("button.submit-button");

    fireEvent.change(nameInput, {
      target: { value: "Someone" },
    });

    fireEvent.change(emailInput, {
      target: { value: "strange@somedomain.com" },
    });

    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    await wait(() => {
      act(() => {
        fireEvent.click(submitButton);
      });
    });

    expect(signupMockFn).toHaveBeenCalled();
    expect(hideMockFn).toHaveBeenCalled();
  });

  it("should show feedback from response", async () => {
    const nameInput = getByPlaceholderText(/What's your name\?/);
    const emailInput = getByPlaceholderText(/Your email so we contact you/);
    const passwordInput = getByPlaceholderText(/To secure your account/);
    const submitButton = document.querySelector("button.submit-button");

    fireEvent.change(nameInput, {
      target: { value: "Someone" },
    });

    fireEvent.change(emailInput, {
      target: { value: "someone1@somedomain.com" },
    });

    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    await wait(() => {
      act(() => {
        fireEvent.click(submitButton);
      });
    });

    expect(getByText(/Email existed/)).toBeInTheDocument();
  });
});
