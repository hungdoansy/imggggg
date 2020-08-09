import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SigninModal from "..";

const FromAuthContext = require("../../../../../context/auth");
FromAuthContext.useAuthContext = jest
  .fn()
  .mockReturnValue({ signIn: () => {} });

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

  it("should render a feedback", () => {
    const emailInput = getByPlaceholderText(/Enter your email here/);

    expect(emailInput.value).toBe("");

    fireEvent.change(emailInput, { target: { value: "some email" } });
    fireEvent.change(emailInput, { target: { value: "" } });

    const feedback = getByText(/Cannot leave any input empty/);
    expect(feedback).toBeInTheDocument();
  });
});
