import { useEffect, useState } from "react";

export function ImgAPI() {
    const[user , setUser] = useState([])

    useEffect(()=> {
        async function getPokemon() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            const data = await response.json()
            setUser(data)
            console.log(data);
        }
        getPokemon()
    }, [])
    return (
         <div>
            <p>{user.base_experience}</p>
            <p>{user.abilities}</p>
         </div>
    )

}

