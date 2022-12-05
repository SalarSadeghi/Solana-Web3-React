import React from 'react'
import { Connection, clusterApiUrl } from '@solana/web3.js'

export default function handleConnection(network) {
    if (network) {
        return (
            new Connection(clusterApiUrl(network), "confirmed")
        )
    } else {
        return (
            new Connection(clusterApiUrl("devnet"), "confirmed")
          )
    }
}
