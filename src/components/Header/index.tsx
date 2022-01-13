import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <span className={styles.logo} />

    <nav>
      <ul className={styles.navigation}>
        <li>HOME</li>
        <li>BURGERS</li>
        <li>SNACKS</li>
        <li>DRINKS</li>
        <li>CONTACTS</li>
      </ul>
    </nav>

    <button type="button" className={styles.togle}>
      <span />
      <span />
      <span />
    </button>
  </header>
)