import NextLink from 'next/link';

import { config } from '../data';

export function Header() {
  return (
    <header>
      <div className="py-20 text-center">
        <h1 className="font-display text-5xl font-medium uppercase text-yellow-200">
          <NextLink href="/">
            <a>{config.title}</a>
          </NextLink>
        </h1>
        <p className="text-2xl font-medium italic">{config.tagline}</p>
      </div>
    </header>
  );
}
