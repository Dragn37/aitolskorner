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
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  </li>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Curated AI tools and insights. No hype. Just signal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3">
            <div>
              <h3 className="font-headline font-semibold text-foreground mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                <FooterLink href="/tools">Tools</FooterLink>
                <FooterLink href="/categories">Categories</FooterLink>
                <FooterLink href="/trending">Trending</FooterLink>
                <FooterLink href="/articles">Articles</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/submit-tool">Submit a Tool</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-and-conditions">
                  Terms & Conditions
                </FooterLink>
                <FooterLink href="/affiliate-disclosure">
                  Affiliate Disclosure
                </FooterLink>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} AI Tools Korner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
