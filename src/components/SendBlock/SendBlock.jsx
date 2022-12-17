import React, { useContext, useRef, useState } from 'react'
import Button from '../Butoon/Button'
import Input from '../Input/Input'
import  { useKey, GenerateKeypair } from '../Keypair/GenerateKeypair'
import Transact from '../Transact/Transact'
import Web3Box from '../Web3Box/Web3Box'
import styles from './SendBlock.module.css'

export default function SendBlock() {
    
    const {key, getKey} = useKey()

    const [elementVisible, setElementVisible] = useState({
        createKeypairBtn: true,
        inputKeypair: false,
        sendDisabledBtn: false,
        isSig: false
    })

    const [sig ,setSig] = useState("")

    const [sendInformation, setSendInformation] = useState({toPublickey:"", amount:""})
    

    // const [key, setKey] = useState()
    
    const handleCreateKey = (e) => {
        e.preventDefault()
        getKey();
        setElementVisible(prevState => ({...prevState, createKeypairBtn: false, inputKeypair:true}))
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(key.publicKey.toString())
    }

    const handleSend = () => {
        setElementVisible(prev => ({...prev, sendDisabledBtn:true}))
    }

    const sendLamport = async () => {
        const signature = await Transact(key, sendInformation.toPublickey, Number(sendInformation.amount))
        if (signature) {
            setElementVisible(prev => ({...prev, isSig:true}))
            setSig(signature)
        }
        
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(sendInformation);
        setSendInformation(prev => ({...prev, [name]:value}))
    }

  return (
    <>
      <Web3Box>
        <div className={`box-content ${styles.sendBlock}`}>
            <div className={styles.createKey}>
                <h2>Create A Wallet</h2>
                {elementVisible.createKeypairBtn && <Button name='Create' onClick={handleCreateKey}/>}
                <div className={styles.keyShow}>
                {elementVisible.inputKeypair &&
                    <>
                    <label htmlFor='generatedKey'><strong>Public Key</strong></label>
                    <Input id='generatedKey' readable={true} value={key.publicKey.toString()} type='text' />
                    <Button name={"Copy"} onClick={handleCopy} /><Button name={"Send"} onClick={handleSend} disabled={elementVisible.sendDisabledBtn} />
                    </> 
                } 
                </div>
            </div>
            <div className={styles.sendOperation}>
                {elementVisible.sendDisabledBtn && 
                <>
                    <div className={styles.sendInput}>
                        <label htmlFor='toPublickey'><strong>To</strong></label>
                        <Input id='toPublickey' size={44} placeholder='Enter Public Key' type='text' value={sendInformation.toPublickey} onChange={handleChange} />
                    </div>
                    <div className={styles.amountInput}>
                        <label htmlFor='amount'><strong>Amount</strong></label>
                        <Input id='amount' placeholder='Lamports' type='number' value={sendInformation.amount} onChange={handleChange}/>
                    </div>
                    <Button name='Verify' onClick={sendLamport}/>
                </>
                }
            </div>
            {elementVisible.isSig && <p>Transaction Signature: {'\u00A0'}
            <a href={`https://explorer.solana.com/tx/${sig}?cluster=devnet`} target='_blank'><strong>Explore Transaction</strong></a>    
            </p>}
        </div>
      </Web3Box>
    </>
  )
}
