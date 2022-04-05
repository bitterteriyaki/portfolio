import { NextPage } from 'next';

import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <main>
      <section className={styles.intro}>
        <div className={styles.name}>
          <h2>Hi!</h2>
          <h1>My name is kyomi.</h1>
          <h3>
            I&apos;m a junior full-stack developer who enjoys building
            exceptional and scalable applications. Currently studying
            Software Engineering at one of the{` `}
            <a href='https://international.unb.br' target='_blank' rel='noreferrer'>
              best colleges in Brazil
            </a>.
          </h3>
        </div>
        <div className={styles.github}>
          <a href='https://github.com/soukyomi' target='_blank'>github.com/soukyomi &#8250;</a>
        </div>
      </section>
    </main>
  )
}

export default Home
