import styles from '../styles/Introduction.module.css'

const Introduction: React.FC = () => {
  return (
    <section data-aos='fade-up' className={styles.intro}>
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
        <a href='https://github.com/soukyomi' target='_blank' rel='noreferrer'>
          github.com/soukyomi &#8250;
        </a>
      </div>
    </section>
  )
}

export default Introduction
