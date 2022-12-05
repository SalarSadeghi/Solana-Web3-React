import React from 'react'
import styles from './PageIntro.module.css'

export default function PageIntro() {
  return (
    <div className={styles.pageIntro}>
      <div className={`container ${styles.container}`}>
        <div className={styles.pageLogo}>
            <img src="./solana-logo.png" alt="Solana Web3" />
        </div>
        <div className={styles.pageTitle}>
            <h1>Solana Web3 Interaction</h1>
            <h3>Solana is a decentralized, secure and fast protocol on blockchain which can perform <br />
                any transaction through eight technological innovations. This project interacts with <br />
                Solana network and reads data from the chain.</h3>
        </div>
      </div>
    </div>
  )
}
