import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <span className="bg-sky-500 text-white font-bold text-sm px-2 py-0.5 rounded">
              CA
            </span>
            <span className="text-gray-400 text-sm">
              &copy; {currentYear} Current Affairs Hub. All rights reserved.
            </span>
          </div>

          <nav className="flex items-center space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
