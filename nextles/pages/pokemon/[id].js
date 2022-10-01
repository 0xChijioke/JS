import React, {useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Details.module.css";

export default function Details(){
    const { query: {id}, } = useRouter();


    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function getPokemon(){
            const resp = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json`);
            setPokemon(await resp.json());
        }

        if (id){
            getPokemon();
        }
    }, [id]);

    if (!pokemon){
        return null;
    }






    return (
        <div>
            <Head>
                <title>{pokemon[id].name}</title>    
            </Head>
            <div>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </div>
            <div className={styles.layout}>
                <div>
                    <img className={styles.picture}
                    src={pokemon && pokemon[id].image}
                    alt={pokemon[id].name.english}
                    />
                </div>
                <div>
                    <div className={styles.name}>{pokemon[id].name}</div>
                    <div className={styles.type}>{pokemon[id].type.join(", ")}</div>
                </div>
                
            </div>

        </div>
    )
}