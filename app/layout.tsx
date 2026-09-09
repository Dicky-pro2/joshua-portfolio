import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const title = 'Joshua Francis Iwule | Graphic Designer & Brand Identity Designer';
const description =
  'Explore the graphic design and brand identity portfolio of Joshua Francis Iwule, featuring logos, branding, flyers, social media designs, mockups and creative visual solutions.';
const siteUrl = 'https://joshua-portfolio.jazzy-knoll-0468.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Joshua Portfolio',
    type: 'profile',
    images: [
      {
        url: '/og-placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'JFI wordmark preview for Joshua Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-placeholder.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Joshua Francis Iwule',
                jobTitle: 'Graphic Designer & Brand Identity Designer',
                email: 'mailto:iwulejoshua@gmail.com',
                telephone: '+2349076773587',
                url: siteUrl,
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'Joshua Portfolio',
                founder: {
                  '@type': 'Person',
                  name: 'Joshua Francis Iwule',
                },
                email: 'mailto:iwulejoshua@gmail.com',
                telephone: '+2349076773587',
                url: siteUrl,
                areaServed: ['Nigeria', 'International'],
                serviceType: [
                  'Brand Identity Design',
                  'Logo Design',
                  'Social Media Design',
                  'Flyers and Posters',
                  'Marketing Collateral',
                  'Product Visuals',
                ],
              },
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
