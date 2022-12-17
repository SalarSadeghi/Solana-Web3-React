import React from 'react'
import { PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from '@solana/web3.js'
import handleConnection from '../Connection/Connection'
import * as buffer from 'buffer'
window.Buffer = buffer.Buffer

export default async function Transact(myKeypair,toPublickey,amount) {
   
    try{
        const instruction = await SystemProgram.transfer({
            fromPubkey: myKeypair.publicKey,
            lamports: amount,
            toPubkey: new PublicKey(toPublickey)
        })
        const transaction = new Transaction().add(instruction)
        const signers = [myKeypair]
        const connection = handleConnection()
        const signature = await sendAndConfirmTransaction(connection,transaction,signers)
      return signature
    }
    catch (error) {
        alert(`${error.name}\n${error.message}`)
    }
}
