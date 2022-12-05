import React from 'react'
import handleConnection from '../Connection/Connection'
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'

const BASE_URL = 'https://explorer.solana.com/tx/'
export default async function Airdrop(address) {
    try {
        const publickey = new PublicKey(address)
        const connection = handleConnection()
        const signature = await connection.requestAirdrop(publickey, LAMPORTS_PER_SOL)
        await connection.confirmTransaction(signature);
        return BASE_URL + `${signature}?cluster=devnet`
    }
    catch(error) {
        alert(`${error.name}\n${error.message}`)
    }
}
