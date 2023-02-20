import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className='flex-1 bg-black text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
