import Link from 'next/link';
import { Logo } from '@/components/icons';

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  </li>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-block">
              <Logo className="h-6 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground hidden sm:block">
              &copy; {currentYear} AI Tools Korner. All rights reserved.
            </p>
          </div>
          <nav>
            <ul className="flex items-center gap-6">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-and-conditions">
                Terms of Service
              </FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </nav>
          <p className="text-sm text-muted-foreground sm:hidden">
            &copy; {currentYear} AI Tools Korner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
