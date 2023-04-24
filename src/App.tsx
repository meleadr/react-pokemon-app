import { useState } from "react";
import POKEMONS from "./models/mock-pokemon";
import Pokemon from "./models/pokemon";
import "./App.css";

function App() {
	const [pokemons] = useState<Pokemon[]>(POKEMONS);

	return (
		<>
			<h1>Pokédex</h1>
			<h2>There is {pokemons.length} pokemons</h2>
		</>
	);
}

export default App;
