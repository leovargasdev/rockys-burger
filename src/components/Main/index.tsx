/* eslint-disable multiline-ternary */
import { SocialMedia } from 'components/SocialMedia'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

import styles from './styles.module.scss'

interface BurgerProps {
  name: string
  image: string
}

interface MainProps {
  addToCart: () => void
}

export const Main = ({ addToCart }: MainProps) => {
  const [activeBurger, setActiveBurger] = useState<number>(0)
  const [burgerClass, setBurgerClass] = useState<string>('')

  const burgers: BurgerProps[] = [
    { image: 'burger-1.png', name: "ROCKY'S SPECIAL FRIED CHICKEN BURGERS 1" },
    { image: 'burger-2.png', name: "ROCKY'S SPECIAL FRIED CHICKEN BURGERS 2" },
    { image: 'burger-3.png', name: "ROCKY'S SPECIAL FRIED CHICKEN BURGERS 3" }
  ]

  const handleChangeBurger = burgerIndex => {
    setBurgerClass('fade-out')
    setTimeout(() => {
      setActiveBurger(burgerIndex)
      setBurgerClass('fade-in')
    }, 600)
  }

  return (
    <main className={styles.container}>
      <h1>BURGER</h1>

      <SocialMedia />

      <div className={styles.content}>
        <article>
          <section className={styles['info-and-bag']}>
            <h3>FRIED CHICKEN BURGERS</h3>
            <h4>ROCKY&apos;S SPECIAL FRIED CHICKEN BURGERS</h4>

            <button type="button" onClick={addToCart}>
              <span>
                <FaChevronRight />
              </span>
            </button>
          </section>
          <section className={styles['info-and-carousel']}>
            <img
              className={styles[burgerClass]}
              src={burgers[activeBurger].image}
              alt="Imagem ilustrativa de um hambuguer"
            />

            <h2 className={styles[burgerClass]}>
              {burgers[activeBurger].name}
            </h2>

            <div className={styles.controll}>
              <span
                onClick={() => handleChangeBurger(0)}
                className={activeBurger === 0 ? styles.active : ''}
              />
              <span
                onClick={() => handleChangeBurger(1)}
                className={activeBurger === 1 ? styles.active : ''}
              />
              <span
                onClick={() => handleChangeBurger(2)}
                className={activeBurger === 2 ? styles.active : ''}
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
