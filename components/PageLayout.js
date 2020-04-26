import React from 'react'
import Navs from './Nav'
import Head from 'next/head'

export default function PageLayout({ children }) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navs />
            {children}
        </div>
    )
}
