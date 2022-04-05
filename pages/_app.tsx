import AOS from 'aos'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import ScrollIndicator from '../components/app/ScrollIndicator'
import Header from '../components/app/Header'
import 'aos/dist/aos.css'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => { AOS.init({ easing: 'ease-out-cubic' }) }, [])

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

export default App
