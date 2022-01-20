import Head from 'next/head'

import { Main } from 'components/Main'
import { Header } from 'components/Header'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rocky&apos;s Burger</title>
      </Head>
      <Header />
      <Main />
    </div>
  )
}
