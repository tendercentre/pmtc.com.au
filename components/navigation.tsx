import NextLink from 'next/link';

import { config } from '../data';

export function Navigation() {
  return (
    <nav>
      <ul className="mx-auto flex w-full max-w-5xl items-center justify-around">
        {config.siteNavigation.map((navItem) => (
          <li key={navItem.slug} className="flex-1">
            <NextLink href={navItem.slug}>
              <a className="inline-block w-full border-t-4 border-transparent py-4 text-center font-medium transition duration-150 ease-in-out hover:border-yellow-200 hover:bg-blue-800">
                {navItem.label}
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
