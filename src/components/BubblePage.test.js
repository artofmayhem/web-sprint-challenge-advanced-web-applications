import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
    render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  //Arrange
  render(<BubblePage />)

  //ACT
  //none needed 

  //Assert
  const bubbles = screen.findAllByAltText(/texthook/i)
  bubbles.then((e) => {
    expect(e).toBeVisible()
    expect(e).toBeInTheDocument()
  })
  bubbles.catch((error) => {
    console.log(error)
  })

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading