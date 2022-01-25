import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import styles from './styles.module.scss'

export const SocialMedia = () => (
  <aside className={styles.container}>
    <a
      href="https://github.com/LeeonardoVargas"
      target="_blank"
      rel="noreferrer"
    >
      <FaFacebookF />
    </a>
    <a href="https://twitter.com/leuvargas" target="_blank" rel="noreferrer">
      <FaTwitter />
    </a>
    <a href="https://instagram.com/leuvargas" target="_blank" rel="noreferrer">
      <FaInstagram />
    </a>
  </aside>
)
