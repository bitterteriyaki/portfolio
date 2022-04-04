import type { AppProps } from 'next/app'

import ScrollIndicator from '../components/app/ScrollIndicator'
import Header from '../components/app/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollIndicator />
      <div className='container'>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
