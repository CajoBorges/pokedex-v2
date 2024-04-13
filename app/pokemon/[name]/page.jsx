// import styles from "../page.module.css";
import Image from "next/image";

export default function Pokemon({ pokemon }) {
  return (
    <main>
      <nav>
        {" "}
        <h1>{pokemon}</h1>{" "}
      </nav>
      <section1>
        <p>
          {name} is a {type} type Pokémon introduced in {gen}
        </p>
      </section1>
    </main>
  );
}
