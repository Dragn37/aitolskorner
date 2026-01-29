'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, PlusCircle, Sun } from 'lucide-react';
import { useState } from 'react';

import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/tools', label: 'Tools' },
  { href: '/categories', label: 'Categories' },
  { href: '/trending', label: 'Trending' },
  { href: '/articles', label: 'Articles' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({
    href,
    label,
    isMobile = false,
  }: {
    href: string;
    label: string;
    isMobile?: boolean;
  }) => {
    const isActive =
      href === '/' ? pathname === href : pathname.startsWith(href);
    return (
      <Link
        href={href}
        className={cn(
          'font-medium text-muted-foreground transition-colors hover:text-foreground',
          isActive && 'text-foreground',
          isMobile ? 'text-lg' : 'text-sm'
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link
                href="/"
                className="mb-8"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Logo />
              </Link>
              <div className="flex flex-col space-y-6">
                <NavLink href="/" label="Home" isMobile />
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} isMobile />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-end gap-2">
          <div className="flex-1 md:hidden">
            <Link href="/" className="flex items-center justify-center">
              <Logo />
            </Link>
          </div>

          <Button asChild>
            <Link href="/submit-tool">
              <PlusCircle className="mr-2" />
              Submit Tool
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Sun className="h-5 w-5" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
