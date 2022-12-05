import React from 'react'
import Network from '../Network/Network';
import styles from './Header.module.css';


export default function Header() {
  return (
    <div className={styles.header}>
        <div className='container'>
            <nav>
                <ul>
                    <li><a href="https://docs.solana.com/introduction" target="_blank">What is Solana</a></li>
                    <li><a href="https://docs.solana.com/cluster/overview" target="_blank">Cluster</a></li>
                </ul>
                <Network />
            </nav>
            
        </div>
    </div>
  )
}
