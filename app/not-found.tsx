import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <div className="grid-container site-container">
        <p className="section-kicker">404</p>
        <h1>That page could not be found.</h1>
        <p>
          The address may have changed, or the page may no longer be available.
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft aria-hidden="true" /> Return to the portfolio
          </Link>
        </Button>
      </div>
    </main>
  );
}
