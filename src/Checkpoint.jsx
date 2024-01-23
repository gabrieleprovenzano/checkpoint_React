import { useState } from "react"

export function MyForm() {
    const[error , setError] = useState({})
    const[data , setData] = useState({
        username: "",
        email:"",
        password: ""
    })

    function handleChange(el) {
        const {name , value} = el.target

        setData({
            ...data,
            [name]: value,
        })
    }

    function Reset() {
        setData({
            username: "",
            email: "",
            password: ""
        })
    }

    function validateForm() {
        let errors = {}

        if(data.username.trim() === "") {
            errors.username = "You must insert a username"
        }

        if(data.email.trim() === '' || !data.email.includes('@')) {
            errors.email = "You must insert a correct email"
        }

        if(data.password.trim() === "" || data.password.length < 6) {
            errors.password = "Your Password must be contain at least 6 letters"
        }

        setError(errors)
        return Object.keys(errors).length === 0;
    }

    function handleSubmit(el) {
        el.preventDefault()
    
        if (validateForm()) {
           localStorage.setItem('data', JSON.stringify(data))
          console.log('Form inviato con successo!', data)
        } else {
          console.log('Il form contiene errori. Si prega di correggere.')
        }
      }

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nome Utente:</label>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                style={{ background: error.username ? 'pink' : 'white' }}
              />
              {error.username && <p style={{ color: 'red' }}>{error.username}</p>}
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
                style={{ background: error.email ? 'pink' : 'white' }}
              />
              {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                style={{ background: error.password ? 'pink' : 'white' }}
              />
              {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
            </div>
            <button type="submit">Invia</button>
            <button onClick={Reset}>Reset</button>
          </form>
        </div>
      );
    }
