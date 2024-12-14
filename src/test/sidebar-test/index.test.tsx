import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Sidebar from "../../components/organisms/sidebar";
import { mocks } from "./mocks";


test("should render Sidebar correctly with data", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <Sidebar />
      </Router>
    </MockedProvider>
  );

  await waitFor(() => screen.getByText("Rick Sanchez"));
  expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
});
