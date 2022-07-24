import { config } from '../data';

export function Footer() {
  return (
    <footer className="mt-20 w-full bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {config.socialLinks.map(({ icon: Icon, label, url }) => (
            <a
              key={url}
              href={url}
              className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-600"
            >
              <span className="sr-only">{label}</span>
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base leading-6 text-gray-600">
            © {new Date().getFullYear()} {config.title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
