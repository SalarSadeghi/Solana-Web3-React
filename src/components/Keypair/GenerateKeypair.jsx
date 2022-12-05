import { Keypair } from '@solana/web3.js'
import React from 'react'

export default function GenerateKeypair() {
    const myKey = Keypair.generate()
    return myKey
}
