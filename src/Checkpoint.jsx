import { useEffect, useState } from "react";

export function ImgAPI() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function getPokemon() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            const data = await response.json()
            setUser(data)
            console.log(data)
        }

        getPokemon()
    }, [])

    return (
        <div>
            <img src={user.sprites.front_default} />
          <h2>Name: {user.name}</h2>
          <p>Base Experience: {user.base_experience}</p>
          <h3>Abilities:</h3>
          <ul>
            {user.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
    )
}

