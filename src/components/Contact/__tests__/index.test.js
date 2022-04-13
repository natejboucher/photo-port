import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";
afterEach(cleanup);

describe("Nav component", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders h1', ()=>{
    const { getByTestId } = render(<ContactForm />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
});

it('renders button', ()=>{
    const { getByTestId } = render(<ContactForm />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('button')).toHaveTextContent('Submit');
})
});
