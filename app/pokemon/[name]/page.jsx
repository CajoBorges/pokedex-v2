"use client";
// import styles from "../page.module.css";
import Image from "next/image";
import {useState, useEffect} from "react";
import { getPokemon } from "@/lib/api.js";

export default function Pokemon({params: {name: name}}) {
  const [pokemon,setPokemon] = useState({})
  useEffect(() => {getPokemon(name).then(p => setPokemon(p))},[name])

  return( 
    <main>
      <nav>
        {" "}
        <h1>{JSON.stringify(pokemon)}</h1>{" "}
      </nav>
      <section1>
        <p>
          {} is a {} type Pokémon introduced in {}
        </p>
      </section1>
    </main>
  );
}
