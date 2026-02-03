import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';

import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aitolskorner.com'),
  title: {
    default: 'AI Tools Korner - Discover the Best AI Tools',
    template: '%s | AI Tools Korner',
  },
  description:
    'Your curated directory of the best AI tools and a hub for insightful articles on artificial intelligence.',
  authors: [{ name: 'AI Tools Korner', url: 'https://www.aitolskorner.com' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Tools Korner',
      },
    ],
    siteName: 'AI Tools Korner',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aitoolskorner',
    creator: '@aitoolskorner',
    images: ['/twitter-image.jpg'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: 'https://storage.googleapis.com/studiopublic/atk-favicon.png',
    apple: 'https://storage.googleapis.com/studiopublic/atk-favicon.png',
  },
  verification: {
    google: 'XyF7U7y05vNtwZZzMW-LBSrFrK4_Ys2LhCVlnosRH7c',
  },
  other: {
    'Content-Type': 'text/html; charset=utf-8',
    language: 'English',
    'revisit-after': '1 days',
  },
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AI Tools Korner',
              alternateName: 'AIToolsKorner',
              url: 'https://www.aitolskorner.com',
              description:
                'Curated directory of the best AI tools with expert reviews and comparisons',
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://www.aitolskorner.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              publisher: {
                '@type': 'Organization',
                name: 'AI Tools Korner',
                url: 'https://www.aitolskorner.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.aitolskorner.com/logo.png',
                  width: 600,
                  height: 60,
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AI Tools Korner',
              url: 'https://www.aitolskorner.com',
              logo: 'https://www.aitolskorner.com/logo.png',
              description:
                'Expert directory and reviews of AI tools for writing, coding, design, and productivity',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                email: 'aitoolskorner@proton.me',
                url: 'https://www.aitolskorner.com/contact',
              },
            }),
          }}
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="ga-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Script id="clarity-script">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/YOUR_PROJECT_ID";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
          `}
        </Script>
      </body>
    </html>
  );
}
