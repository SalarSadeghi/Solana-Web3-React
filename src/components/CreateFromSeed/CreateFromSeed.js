import { PublicKey, SystemProgram } from '@solana/web3.js'
import React from 'react'

export default async function CreateFromSeed(publickeyAddress,programAddress,seed) {
    try {
        const publickey = new PublicKey(publickeyAddress)
        const program = new PublicKey(programAddress)
        const pda = await PublicKey.createWithSeed(publickey, seed, program)
        return pda
    }
    catch (error) {
        alert(`${error.name}\n${error.message}`)
    }
    
}
