import { NextPage } from 'next'

import Introduction from '../components/Introduction'
import Showcase from '../components/Showcase'

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <Showcase />
    </>
  )
}

export default Home
