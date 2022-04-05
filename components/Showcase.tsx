import styles from '../styles/Showcase.module.css'

interface ItemProps {
  title: string
  repository: string
}

const Item: React.FC<ItemProps> = ({ title, repository, children }) => {
  const url = `https://github.com/soukyomi/${repository}`

  return (
    <div className={styles.item}>
      <h4>{title}</h4>
      <p>{children}</p>
      <a href={url} target='_blank' rel='noreferrer'>See repository &#8250;</a>
    </div>
  )
}

const Showcase: React.FC = () => {
  return (
    <section data-aos='fade-up' className={styles.showcase}>
      <h2><code>01.</code> Some Things I&apos;ve Built</h2>
      <div className={styles.items}>
        <Item title='Next Level Week #4' repository='nlw-4'>
          Repository containing my code from{` `}
          <a href='https://nextlevelweek.com' target='_blank' rel='noreferrer'>
            NLW #4
          </a>{` `}
          classes, one of the biggest programming events in Brazil.
        </Item>
        <Item title='This portfolio' repository='portfolio'>
          This portfolio was made with lots of love using Node.js and the
          Next.js framework.
        </Item>
        <Item title='aiowaifus' repository='aiowaifus'>
          A modern, easy to use and async ready API wrapper for Waifu.pics
          written in Python.
        </Item>
        <Item title='Jaskier' repository='jaskier'>
          A simple library to make terminal logs more beautiful and readable.
        </Item>
      </div>

    </section>
  )
}

export default Showcase
