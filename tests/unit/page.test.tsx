import { render, screen, within } from "@testing-library/react";
import Home from "@/app/page";

describe("portfolio home page", () => {
  it("renders the primary software engineering profile", () => {
    const { container } = render(<Home />);

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
    const educationCard = container.querySelector(".education-card");
    expect(educationCard).not.toBeNull();
    if (!educationCard) throw new Error("Education card not found");
    const education = within(educationCard as HTMLElement);
    expect(education.queryByText(/GPA/)).not.toBeInTheDocument();
    expect(education.getByText("2026")).toBeInTheDocument();
    expect(education.getByText("2022")).toBeInTheDocument();
    expect(educationCard.querySelectorAll(".ui-tag")).toHaveLength(0);
    expect(educationCard.querySelectorAll("time.degree-year")).toHaveLength(2);
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
