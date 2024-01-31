import NextLink from "next/link";
import PropTypes from "prop-types";

import { config } from "../data";

export function Navigation() {
  return (
    <nav>
      <ul className="flex items-center justify-around w-full max-w-5xl mx-auto">
        {config.siteNavigation.map((navItem) => (
          <li key={navItem.slug} className="flex-1">
            <NextLink
              href={navItem.slug}
              className="inline-block w-full py-4 font-medium text-center transition duration-150 ease-in-out border-t-4 border-transparent hover:border-yellow-200 hover:bg-blue-800"
            >
              {navItem.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Link({ children, slug }) {
  const className =
    "inline-block w-full py-4 font-medium text-center transition duration-150 ease-in-out border-t-4 border-transparent hover:border-yellow-200 hover:bg-blue-800";
  if (slug === "/catalogue.pdf")
    return (
      <a href={slug} className={className}>
        {children}
      </a>
    );
  return (
    <NextLink href={slug} className={className}>
      {children}
    </NextLink>
  );
}

Link.propTypes = {
  slug: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
