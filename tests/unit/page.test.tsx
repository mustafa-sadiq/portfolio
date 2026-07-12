import { render, screen, within } from "@testing-library/react";
import Home from "@/app/page";

describe("portfolio home page", () => {
  it("renders the primary software engineering profile", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /build secure digital systems/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("22M+")).toBeInTheDocument();
    expect(screen.getByText("289")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "NextGen Information Gateway" }),
    ).toBeInTheDocument();
  });

  it("exposes accessible navigation and contact actions", () => {
    render(<Home />);

    const navigation = screen.getByRole("navigation", {
      name: "Main navigation",
    });
    expect(
      within(navigation).getByRole("link", { name: "Work" }),
    ).toHaveAttribute("href", "#work");
    expect(
      screen.getAllByRole("link", {
        name: /let's talk|get in touch|start a conversation/i,
      }),
    ).toHaveLength(3);
    expect(
      screen.getAllByRole("link", { name: /linkedin/i })[0],
    ).toHaveAttribute("href", "https://www.linkedin.com/in/mustafasadiq/");
  });
});
