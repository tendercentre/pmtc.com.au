import type { ReactNode } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { Navigation } from './navigation';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="fill-available flex min-h-screen flex-col bg-blue-900 font-sans text-white antialiased">
      <Navigation />
      <Header />

      <main className="flex-1 px-4">{children}</main>
      <Footer />
    </div>
  );
}
