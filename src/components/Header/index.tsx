import { BsCart3 } from 'react-icons/bs'

import styles from './styles.module.scss'
interface HeaderProps {
  cartQuant: number
}

export const Header = ({ cartQuant }: HeaderProps) => (
  <header className={styles.container}>
    <img src="/logo.png" alt="logo rocky's burguer" />

    <nav>
      <ul className={styles.navigation}>
        <li>HOME</li>
        <li>BURGERS</li>
        <li>SNACKS</li>
        <li>DRINKS</li>
        <li>CONTACTS</li>
      </ul>
    </nav>

    <button type="button" className={styles.cart}>
      <BsCart3 size="2.5rem" />
      {!!cartQuant && <span>{cartQuant}</span>}
    </button>
  </header>
)
