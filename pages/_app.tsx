import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollIndicator />
      <Component {...pageProps} />
    </>
  );
}
