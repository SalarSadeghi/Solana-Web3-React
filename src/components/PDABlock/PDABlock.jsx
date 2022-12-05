import React, { useState } from 'react'
import Button from '../Butoon/Button'
import CreateFromSeed from '../CreateFromSeed/CreateFromSeed'
import Input from '../Input/Input'
import Web3Box from '../Web3Box/Web3Box'
import styles from './PDABlock.module.css'

export default function PDABlock() {
    const [elementVisible, setElementVisible] = useState({
        createPDABtn: true,
        ispda: false
    })

    const [pdaInfo, setPdaInfo] = useState({
        publickey: "",
        program: "",
        seed: ""
    })

    const [pda, setPda] = useState("")

    const handlePDABtn = () => {
        setElementVisible(prev => ({...prev, createPDABtn:false}))
    }

    const handlePDACreation = async (e) => {
        e.preventDefault()
        const mypda = await CreateFromSeed(pdaInfo.publickey, pdaInfo.program, pdaInfo.seed)
        if (mypda) {
            setElementVisible(prev => ({...prev, ispda:true}))
            setPda(mypda)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setPdaInfo(prev => ({...prev, [name]:value}))
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(pda)
    }
  return (
    <>
      <Web3Box>
        <div className={`box-content ${styles.pdaBlock}`}>
            <h2>Create Program Derived Address (PDA)</h2>
            
                {elementVisible.createPDABtn && 
                <div className={styles.pdaCreationBtn}>
                <Button name='Create' onClick={handlePDABtn}/>
                </div>
                }
            
            {!elementVisible.createPDABtn && 
                <form onSubmit={handlePDACreation}>
                <label htmlFor="publickey"><strong>Public Key</strong></label><br />
                <Input id='publickey' value={pdaInfo.publickey} type='text' size={44} placeholder='Enter Public Key' onChange={handleChange}/>
                <label htmlFor="program"><strong>Program ID</strong></label>
                <Input id='program' value={pdaInfo.program} type='text' size={44} placeholder='Enter Program Address' onChange={handleChange}/>
                <label htmlFor="seed"><strong>Seed</strong></label>
                <Input id='seed' type='text' value={pdaInfo.seed}  placeholder='Enter Seed' onChange={handleChange}/>
                <Button name='Create' />
                </form>}
                {elementVisible.ispda && 
                <div className={styles.pdaShow}>
                    <label htmlFor="pda"><strong>PDA</strong></label>
                    <Input id='pda' readable={true} value={pda} />
                    <Button name='Copy' onClick={handleCopy}/>
                </div>
                }
                {/* <div className='clear-fix'></div> */}
        </div>
      </Web3Box>
    </>
  )
}
