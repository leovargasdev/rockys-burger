import Head from 'next/head'

import { Main } from 'components/Main'
import { Header } from 'components/Header'

import styles from 'styles/home.module.scss'
import { useState } from 'react'

export default function Home() {
  const [cartQuant, setCartQuant] = useState<number>(0)

  return (
    <div className={styles.container}>
      <Head>
        <title>Rocky&apos;s Burger</title>
      </Head>
      <Header cartQuant={cartQuant} />
      <Main addToCart={() => setCartQuant(state => state + 1)} />
    </div>
  )
}
