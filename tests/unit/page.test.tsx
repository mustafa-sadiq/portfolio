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
        name: /contact|get in touch|start a conversation/i,
      }),
    ).toHaveLength(4);
    expect(
      screen.getAllByRole("link", { name: /linkedin/i })[0],
    ).toHaveAttribute("href", "https://www.linkedin.com/in/mustafasadiq/");
  });

  it("publishes Person and WebSite structured data", () => {
    const { container } = render(<Home />);
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );

    expect(script).not.toBeNull();
    const data = JSON.parse(script?.textContent ?? "{}");
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@graph"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ "@type": "Person", name: "Mustafa Sadiq" }),
        expect.objectContaining({
          "@type": "WebSite",
          name: "Mustafa Sadiq Portfolio",
        }),
      ]),
    );
  });
});
