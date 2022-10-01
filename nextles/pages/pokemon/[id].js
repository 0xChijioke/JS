import React, {useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Details.module.css";

export async function getServerSideProps({ params }){
    const resp = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json`);
     return {
        props: {
            pokemon: await resp.json(),
        }
    }
}

export default function Details({ pokemon }){
    

    if (!pokemon){
        return null;
    }






    return (
        <div>
            <Head>
                <title>{pokemon.name}</title>    
            </Head>
            <div>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </div>
            <div className={styles.layout}>
                <div>
                    <img className={styles.picture}
                    src={pokemon && pokemon.image}
                    alt={pokemon.name.english}
                    />
                </div>
                <div>
                    <div className={styles.name}>{pokemon.name}</div>
                    <div className={styles.type}>{pokemon.type.join(", ")}</div>
                </div>
                
            </div>

        </div>
    )
}