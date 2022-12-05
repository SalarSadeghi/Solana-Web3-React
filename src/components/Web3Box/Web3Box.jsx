import React from 'react'
import styles from './Web3Box.module.css'
import AccountInfo from '../AccountInfo/AccountInfo'
export default function Web3Box({children}) {
    
  return (
    <div className={`${styles.web3Box} web3Box`}>
      <div className='container'>{children}</div>
    </div>
  )
}
