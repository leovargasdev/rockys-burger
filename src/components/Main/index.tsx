import { useState } from 'react'
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'

import styles from './styles.module.scss'

export const Main = () => {
  const [activeControll, setActiveControll] = useState(0)

  return (
    <main className={styles.container}>
      <h1>BURGUER</h1>
      <aside className={styles['social-media']}>
        <a
          href="https://github.com/LeeonardoVargas"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/leuvargas"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/leuvargas"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </aside>
      <div className={styles.content}>
        <article>
          <section className={styles['info-and-bag']}>
            <h3>FRIED CHICKEN BURGERS</h3>
            <h4>ROCKY&apos;S SPECIAL FRIED CHICKEN BURGERS</h4>

            <button>
              ADD TO BAG{' '}
              <span>
                <FaChevronRight />
              </span>
            </button>
          </section>
          <section className={styles['info-and-carousel']}>
            <img src="burger.png" alt="Imagem ilustrativa de um hambuguer" />
            <h2>ROCKY&apos;S SPECIAL FRIED CHICKEN BURGERS</h2>

            <div className={styles.controll}>
              <span
                onClick={() => setActiveControll(0)}
                className={activeControll === 0 ? styles.active : ''}
              />
              <span
                onClick={() => setActiveControll(1)}
                className={activeControll === 1 ? styles.active : ''}
              />
              <span
                onClick={() => setActiveControll(2)}
                className={activeControll === 2 ? styles.active : ''}
              />
            </div>
          </section>
        </article>
        <footer className={styles.languages}>
          <ul>
            <li>EN</li>
            <li>AR</li>
            <li>ES</li>
          </ul>
        </footer>
      </div>
    </main>
  )
}
