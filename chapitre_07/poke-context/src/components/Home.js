import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Home() {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/")
			.then((res) => res.json())
			.then((res) => {
				setPokemon(res);
			});
	}, []);
  return (
    <div>

    </div>
  )
}