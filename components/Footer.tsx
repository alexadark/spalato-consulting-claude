import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-adriatic-blue border-t-4 border-dark-gray">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
        {/* Company tagline */}
        <div className="text-center mb-8">
          <p className="text-xl font-serif font-bold text-white mb-2">Spalato Consulting</p>
          <p className="text-sm text-soft-gray">
            Empowering SMBs with AI to streamline operations without the hype
          </p>
        </div>

        {/* Navigation links */}
        <nav className="-mb-6 flex flex-wrap justify-center gap-x-8 gap-y-4" aria-label="Footer">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-soft-gray hover:text-warm-coral transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact info */}
        <div className="mt-10 text-center text-sm text-soft-gray">
          <p>Email: <a href="mailto:info@spalato-consulting.com" className="hover:text-warm-coral transition-colors">info@spalato-consulting.com</a></p>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-xs leading-5 text-soft-gray">
          &copy; {currentYear} Spalato Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
