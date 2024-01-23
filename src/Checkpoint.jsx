import { useState } from "react"

export function MyForm() {
    const[error , setError] = useState({})
    const[data , setData ] = useState({
        username: "",
        password: ""
    })

    function handleChange(el) {
        const { name , value} = el.target 
        setData({
            ...data,
            [error]: value
        })
    }

    function validForm() {
        let formErrors = {}

        if (data.username === "" ) {
            formErrors.username = "Devi inserire uno username";
        } else if (data.password === length < 12){
            formErrors.password = "La password deve contenere almeno 12 caratteri";
        }
        setError(formErrors)

        return Object.keys(formErrors).length === 0
    }

    function handleSubmit(el) {
        el.preventDefault()

        if (validForm()) {
            console.log("Acesso  effettuato con succsso");
        }
    }

    function Reset() {
        setData({
            username: "",
            password: ""
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <img src="" />
                    <input type="text" name="username" value={data.username}  onChange={handleChange} style={{border: error.username === "red"}} />
                </div>
                <div>
                    <img src="" />
                    <input type="text" name="password" value={data.password}  onChange={handleChange} style={{border: error.username === "red"}} />
                </div>
                <div>
                    <button type="submit">Login</button>
                    <button onClick={Reset}>Reset</button>
                </div>
            </form>
        </div>
    )
}