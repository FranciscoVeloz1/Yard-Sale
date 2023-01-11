import React from 'react'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Yard sale</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  )
}
