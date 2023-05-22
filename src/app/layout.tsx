import React from 'react'
import { Metadata } from 'next'

import Header from '@/components/header'
import Footer from '@/components/footer'

import Providers from './providers'

export const metadata: Metadata = {
  title: 'Santiago Moyano - Frontend Developer & Designer',
  description: 'I am a passionate frontend developer with experience in industrial design. My focus is on creating exceptional digital experiences using technologies such as ReactJS, HTML5, CSS3, and JavaScript. My unique combination of technical and creative skills allows me to design attractive and functional interfaces while developing innovative web solutions. Explore my portfolio to discover standout projects..'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta content='index' name='robots' />
        <meta content='Frontend Developer, Designer, ReactJS, HTML5, CSS3, JavaScript, User Interface Design, Portfolio' name='keywords' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link href='images/favicon/apple-icon-57x57.png' rel='apple-touch-icon' sizes='57x57' />
        <link href='images/favicon/apple-icon-60x60.png' rel='apple-touch-icon' sizes='60x60' />
        <link href='images/favicon/apple-icon-72x72.png' rel='apple-touch-icon' sizes='72x72' />
        <link href='images/favicon/apple-icon-76x76.png' rel='apple-touch-icon' sizes='76x76' />
        <link href='images/favicon/apple-icon-114x114.png' rel='apple-touch-icon' sizes='114x114' />
        <link href='images/favicon/apple-icon-120x120.png' rel='apple-touch-icon' sizes='120x120' />
        <link href='images/favicon/apple-icon-144x144.png' rel='apple-touch-icon' sizes='144x144' />
        <link href='images/favicon/apple-icon-152x152.png' rel='apple-touch-icon' sizes='152x152' />
        <link href='images/favicon/apple-icon-180x180.png' rel='apple-touch-icon' sizes='180x180' />
        <link
          href='images/favicon/android-icon-192x192.png'
          rel='icon'
          sizes='192x192'
          type='image/png'
        />
        <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
        <link href='/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
        <link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
        <link href='/site.webmanifest' rel='manifest' />
        <link href='images/favicon/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
        <link href='images/favicon/favicon-96x96.png' rel='icon' sizes='96x96' type='image/png' />
        <link href='images/favicon/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
        <link href='/favicon.ico' rel='shortcut icon' type='image/svg+xml' />
        <meta content='es' property='og:locale' />
        <meta content='website' property='og:type' />
        <link href='https://use.typekit.net/nvb0lhh.css' rel='stylesheet' />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
