import { SocialMedia } from 'components/SocialMedia'
import { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'

import styles from './styles.module.scss'
interface HeaderProps {
  cartQuant: number
}

export const Header = ({ cartQuant }: HeaderProps) => {
  const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false)

  return (
    <header className={styles.container}>
      <img src="/logo.png" alt="logo rocky's burguer" />

      <nav className={isVisibleMobileNav ? styles.active : ''}>
        <ul className={styles.navigation}>
          <li>HOME</li>
          <li>BURGERS</li>
          <li>SNACKS</li>
          <li>DRINKS</li>
          <li>CONTACTS</li>
        </ul>

        <SocialMedia />
      </nav>

      <button type="button" className={styles.cart}>
        <BsCart3 size="2.5rem" />
        {!!cartQuant && <span>{cartQuant}</span>}
      </button>

      <button
        type="button"
        className={`${styles['toggle-mobile']} ${
          isVisibleMobileNav ? styles['toggle-active'] : ''
        }`}
        onClick={() => setIsVisibleMobileNav(state => !state)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
