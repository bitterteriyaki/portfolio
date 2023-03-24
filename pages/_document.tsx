import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const classes = [
    'bg-gradient-to-b',
    'from-black',
    'to-zinc-900',
    'font-["Inter"]',
    'cursor-default',
    'scrollbar-thin',
    'scrollbar-thumb-white',
    'scrollbar-thumb-rounded-full',
    'scrollbar-track-zinc-900',
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
