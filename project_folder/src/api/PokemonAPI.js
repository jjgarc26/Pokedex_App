import React, { useEffect, useState } from "react";
import PokemonList from "../Components/PokemonList/PokemonList";

const PokemonAPI = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getData();
    },[])

    //fetch pokemon api
    const getData = async() =>{
        try{
            let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            let data = await response.json()

            //Parse over api url to get pokemon information
            const pokemonData = []
            for(let i = 0; i < data.results.length; i++){
                let res = await fetch(data.results[i].url)
                let secondData = await res.json()
                pokemonData.push(secondData)
            }
            setData(pokemonData)

        } catch{
            console.error('Api was not able to be found')
        }

    }
    console.log(data)
    return (
        <React.Fragment>
            <PokemonList pokemonData = {data}/>
        </React.Fragment>
    )
}
export default PokemonAPI