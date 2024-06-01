"use client";
import { getAll } from "@/lib/api.js";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { filter } from "../lib/filter";


export default function Home() {
  const [state, setState] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [nome, setNome] = useState("");
  useEffect(() => {
    getAll().then((st) => {setState(st);setFilterState(st.results)})
  }, []);
  return (
    <div className={styles.tudo}>
      <div className={styles.divtitle}>
        <Image
          src="/Poké_Ball_icon.svg.png"
          width="65"
          height="65"
          alt="Pokédex"
        />
        <h1 className={styles.title}>Pokédex</h1>
      </div>
      <div>
        <div className={styles.searchform}>
          <input
            type="text"
            className={styles.searchbar}
            id="searchbar"
            placeholder="Search Pokemon..."
            onChange={(e) => setNome(e.target.value)}            
          />
          <button className={styles.searchbutton} onClick={(e)=>setFilterState(filter(state?.results, nome, undefined))}>
            Pesquisar
          </button>
        </div>
        <table id="pokemon-table" className={styles.pokemontable}>
          <thead className={styles.tableheader}>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Type</th>
              <th>HP</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Sp.Atk</th>
              <th>Sp.Def</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            {
              filterState?.map((pokemon, i) => (
                <tr key={pokemon.id}>
                  <td>
                    <Link href={`/pokemon/${pokemon.id}`}>{pokemon.id}</Link> 
                  </td>
                  <td>{pokemon.name || "name"}</td>
                  <td>{pokemon.type || "type"}</td>
                  <td>{JSON.stringify(pokemon)/* {pokemon.base.hp} */}</td>
                  <td>{/* {pokemon.base.Attack} */}</td>
                  <td>{/* {pokemon.base.Defense} */}</td>
                  <td>{/* {pokemon.base["Sp. Attack"]} */}</td>
                  <td>{/* {pokemon.base["Sp. Defense"]} */}</td>
                  <td>{/* {pokemon.base.Speed} */}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
