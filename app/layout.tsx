import React from 'react'
import 'styles/styles.css'

interface props {
  children: React.ReactNode;
}

export default function RootLayout ({ children }: props) {
  return (
    <html>
      <head>
        <title>Yard sale</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
