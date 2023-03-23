import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const classes = [
    'bg-gradient-to-b',
    'from-black',
    'to-zinc-900',
    'font-["Inter"]',
    'cursor-default',
  ];

  return (
    <Html lang="en">
      <Head />
      <body className={classes.join(' ')}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
