import { NextPage } from 'next'

import Introduction from '../components/Introduction'
import Showcase from '../components/Showcase'

const Home: NextPage = () => {
  return (
    <main>
      <Introduction />
      <Showcase />
    </main>
  )
}

export default Home
