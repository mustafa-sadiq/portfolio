import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

describe("shared UI primitives", () => {
  it("supports buttons and linked button composition", () => {
    const { rerender } = render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();

    rerender(
      <Button asChild variant="outline">
        <a href="#work">View work</a>
      </Button>,
    );
    expect(screen.getByRole("link", { name: "View work" })).toHaveAttribute(
      "href",
      "#work",
    );
  });

  it("renders cards, badges, and separators with accessible semantics", () => {
    render(
      <Card>
        <CardTitle>Credential</CardTitle>
        <CardContent>
          <Badge>Verified</Badge>
          <Separator data-testid="separator" />
        </CardContent>
      </Card>,
    );

    expect(
      screen.getByRole("heading", { name: "Credential" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Verified")).toBeInTheDocument();
    expect(screen.getByTestId("separator")).toHaveAttribute(
      "role",
      "separator",
    );
  });

  it("merges Tailwind classes predictably", () => {
    expect(cn("px-2", false && "hidden", "px-4")).toBe("px-4");
  });
});
