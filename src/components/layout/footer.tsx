import Link from 'next/link';
import { Logo } from '@/components/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Logo className="h-6 w-auto" />
            </Link>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} AI Tools Korner. All rights reserved.</p>
          </div>

          <div className="flex justify-center md:justify-end flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/affiliate-disclosure" className="text-muted-foreground hover:text-foreground">
              Disclosure
            </Link>
            <Link href="/sitemap" className="text-muted-foreground hover:text-foreground">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
