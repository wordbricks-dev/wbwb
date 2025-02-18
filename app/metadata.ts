import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wordbricks - AI That Works Like You Think',
  description: 'AI-powered workspace that gets things done for you.',
  openGraph: {
    title: 'Wordbricks - AI That Works Like You Think',
    description: 'AI-powered workspace that gets things done for you.',
    images: [
      {
        url: '/og-image.png', // Path relative to the public directory
        width: 1200,
        height: 630,
        alt: 'Wordbricks - AI That Works Like You Think',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wordbricks - AI That Works Like You Think',
    description: 'AI-powered workspace that gets things done for you.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
} 
