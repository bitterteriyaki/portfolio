import Link from 'next/link'

import styles from '../styles/Header.module.css'

interface NavigationLinkProps {
  href: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href}><a className={styles.option}>{children}</a></Link>
    </li>
  )
}

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.panel}>
          <NavigationLink href='/'>Home</NavigationLink>
          <NavigationLink href='/skills'>Skills</NavigationLink>
          <NavigationLink href='/career'>Career</NavigationLink>
          <NavigationLink href='/contact'>Contact</NavigationLink>
        </ul>
      </nav>
      <Link href='/'><a className={styles.resume}>Resume</a></Link>
    </header>
  )
}

export default Header
