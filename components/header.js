import Link from "next/link";

import { config } from "../data";

export function Header() {
  return (
    <header>
      <div className="py-20 text-center">
        <h1 className="text-5xl font-medium text-yellow-200 uppercase font-display">
          <Link href="/">{config.title}</Link>
        </h1>
        <p className="text-2xl italic font-medium">{config.tagline}</p>
      </div>
    </header>
  );
}
