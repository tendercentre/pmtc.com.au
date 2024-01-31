import { config } from "../data";

export function Footer() {
  return (
    <footer className="w-full mt-20 bg-white">
      <div className="max-w-5xl px-4 py-12 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {config.socialLinks.map((socialLink) => (
            <a
              key={socialLink.url}
              href={socialLink.url}
              className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-600"
            >
              <span className="sr-only">{socialLink.label}</span>
              <socialLink.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base leading-6 text-center text-gray-600">
            © {new Date().getFullYear()} {config.title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
