"use client";
import { getAll, getPokemon } from "@/lib/api.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getAll().then((st) => setState(st));
  }, []);
  return <>{JSON.stringify(state)}</>;
}
