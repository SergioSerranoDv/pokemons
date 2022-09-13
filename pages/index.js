
import Head from 'next/head'

import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Pokemon = ( { pokemon, key})=> {
  const id = pokemon.url.split('/').filter(x => x).pop()
  
    return <li><Link  href={`/Pokemones/${id}`}>{pokemon.name}</Link></li>
}
export default function Pokemons({Pokemons}) {
  console.log(Pokemons)
  return (
    <div>
      {Pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name}/>)}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  return {
    props: {Pokemons:data.results}
  }
}