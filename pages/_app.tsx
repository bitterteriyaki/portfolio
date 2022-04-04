import type { AppProps } from 'next/app'

import ScrollIndicator from '../components/app/ScrollIndicator'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollIndicator />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
