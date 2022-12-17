import { Keypair } from '@solana/web3.js'
import React, { createContext, useContext, useState } from 'react'
import SendBlock from '../SendBlock/SendBlock'

const KeyContext = createContext(undefined)
const GenerateKeypair = ({children}) => {
    const [key, setMyKey] = useState()
    const getKey = () => setMyKey(Keypair.generate())
    

    return( <KeyContext.Provider value={{key,getKey}}>
                {children}
         </KeyContext.Provider>)
}

const useKey = () => useContext(KeyContext)

export {GenerateKeypair, useKey}