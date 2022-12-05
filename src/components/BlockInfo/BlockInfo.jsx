import React from 'react'
import Input from '../Input/Input'
import Web3Box from '../Web3Box/Web3Box'
import styles from './BlockInfo.module.css'
import Button from '../Butoon/Button'
import AccountInfo from '../AccountInfo/AccountInfo'
import { useState } from 'react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import Airdrop from '../Airdrop/Airdrop'

export default function BlockInfo() {
  const [data, setData] = useState({
    address: "",
    balance: "" ,
    sig: "",
    owner: ""
  })
  const [inputData, setInputData] = useState("")
  const handleBalance = async () => {
    try {
      const mydata = await AccountInfo(inputData)
      const {lamports, owner, ...rest} = mydata
      setData(prevdata => ({...prevdata, balance:lamports / LAMPORTS_PER_SOL, owner:owner.toString()})) 
    } catch(error) {
      alert(`${error.name}\n${error.message}`)
    }
  }

  const handleAirdrop = async () => {
    const signatureLink = await Airdrop(inputData)
    await handleBalance()
    setData(prevdata => ({...prevdata, sig:<a href={signatureLink} target='_blank'>Explore Transaction</a>}))
  }

  const handleInput = (e) => {
    const value = e.target.value
    setInputData(value)
  }
  return (
    <>
      <Web3Box>
        <div className={`box-content`}>
        <label htmlFor='publickey'>Public Key:</label>
        <Input id='publickey' placeholder='Enter Public Key' size={44} value={inputData} type='text' onChange={handleInput}/>
        <Button name='Check Balance' onClick={handleBalance}/>
        <Button name='Airdrop' onClick={handleAirdrop}/>
        <p>Account Address: </p>
        <p>Balance: {'\u00A0'}<strong>{data.balance}</strong></p>
        <p>Owner: {'\u00A0'}<strong>{data.owner}</strong></p>
        <p>Airdrop Signature: {'\u00A0'}<strong>{data.sig}</strong></p>
        </div>
      </Web3Box>
    </>
  )
}
