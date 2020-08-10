import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignupModal from "../SignupModal";

const FromAuthContext = require("context/auth");
FromAuthContext.useAuthContext = jest
  .fn()
  .mockReturnValue({ signIn: () => {} });

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
});
