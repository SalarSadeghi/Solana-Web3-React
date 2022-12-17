import { LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js'
import React from 'react'
import AccountInfo from '../AccountInfo/AccountInfo'
import Airdrop from '../Airdrop/Airdrop'
import handleConnection from '../Connection/Connection'

export default async function CreateFromSeed(publickeyAddress,programAddress,seed,key,size) {
    const publickey = new PublicKey(publickeyAddress)
    const program = new PublicKey(programAddress)
    const pda = await PublicKey.createWithSeed(publickey, seed, program)
    const connection = handleConnection()
    await Airdrop(publickey)
    console.log("airdropped");
    const lamports = await connection.getMinimumBalanceForRentExemption(size)
    const fetchData = await AccountInfo(publickeyAddress)
    if (fetchData === null || fetchData.lamports < lamports) {
        alert(`Insufficient funds\nPlease Airdrop your wallet`)
        return []
    }

    try {
        const transaction = new Transaction().add(
            SystemProgram.createAccountWithSeed({
                fromPubkey:publickey,
                basePubkey:publickey,
                seed:seed,
                newAccountPubkey:pda,
                lamports: lamports,
                space:size,
                programId:program
            })
        )
        const sig = await sendAndConfirmTransaction(connection, transaction, [key]);
        console.log(sig);
        return [pda, sig]
    }
    catch (error) {
        alert(`${error.name}\n${error.message}`)
    }
    
}
