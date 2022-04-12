import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import MenuGame from "./Navigation";

export default function Default({children}) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <MenuGame />
            {children}
        </div>
    )
}