import React from 'react'
import { Connection, PublicKey } from '@solana/web3.js'
import handleConnection from '../Connection/Connection'

export default async function AccountInfo(address) {
    const connection = handleConnection()
    const publickey = new PublicKey(address)
    try {
        const data = await connection.getAccountInfo(publickey);
        return data
    }
    catch (err) {
        alert(err.message)
    }

}
