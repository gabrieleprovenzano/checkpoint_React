export function Card(props) {
    const {user} = props

    return(
        <div>
            <img src={user.sprites.back_default} />
            <p>{user.base_experience}</p>
            <p>{user.abilities[0]}</p>
        </div>
    )
}