import React, { useState } from 'react'
import handleConnection from '../Connection/Connection'
import styles from './Network.module.css'

export default function Network() {
    const [network, setNetwork] = useState("devnet")
    const handleNetwork = (e) => {
        setNetwork(e.target.value)
    }
    
  return (
    <>
        <select name="network" id="network" value={network} onChange={handleNetwork} style={{color:"purple"}}>
            <option value="mainnet-beta">Mainnet</option>
            <option value="testnet">Testnet</option>
            <option value="devnet">Devnet</option>
        </select>
    </>
  )
}
