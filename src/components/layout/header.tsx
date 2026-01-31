'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, PlusCircle, Sun, Moon, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { getAllCategories } from '@/lib/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const navLinks = [
  { href: '/tools', label: 'Tools' },
  { href: '/trending', label: 'Trending' },
  { href: '/articles', label: 'Articles' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const categories = getAllCategories();
  const isCategoriesActive = pathname.startsWith('/categories');

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      document.documentElement.classList.add('light');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

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
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-16 items-center justify-between">
        {/* Left Side: Desktop Nav or Mobile Menu Trigger */}
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            <Link href="/" className="mr-6">
              <Logo />
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      'flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground',
                      isCategoriesActive && 'text-foreground'
                    )}
                  >
                    Categories <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[450px] grid grid-cols-3 gap-1 p-2">
                  <DropdownMenuItem asChild className="col-span-3">
                    <Link href="/categories" className="font-bold">All Categories</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="col-span-3 my-1" />
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.slug} asChild>
                      <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
                   <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="categories" className="border-b-0">
                      <AccordionTrigger className={cn("text-lg font-medium text-muted-foreground transition-colors hover:text-foreground hover:no-underline py-0 [&[data-state=open]>svg]:text-foreground", isCategoriesActive && 'text-foreground')}>
                        Categories
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pl-4 flex flex-col space-y-4">
                        <Link href="/categories" className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>All Categories</Link>
                        {categories.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/categories/${category.slug}`}
                            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Center: Mobile Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Logo />
            </Link>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex">
              <Link href="/submit-tool">
                <PlusCircle className="mr-2" />
                Submit Tool
              </Link>
            </Button>
            <Button asChild size="icon" className="md:hidden">
              <Link href="/submit-tool">
                <PlusCircle />
                <span className="sr-only">Submit Tool</span>
              </Link>
            </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} disabled={!mounted}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
