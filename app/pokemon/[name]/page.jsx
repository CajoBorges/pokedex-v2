// import styles from "../page.module.css";
import Image from "next/image";

export default function Pokemon({ params }) {
  return (
    <main>
      <title>{params.name}</title>
      <body>
        <p>
          {name} is a {type} type Pokémon introduced in {gen}
        </p>
      </body>
    </main>
  );
}
