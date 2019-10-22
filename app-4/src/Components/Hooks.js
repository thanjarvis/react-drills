import React, {useState} from 'react'

const Hooks = () => {
    const [username, usernameInput] = useState('')
    const [password, passwordInput] = useState('')


    return(
        <div>
            <input
                onChange={e => usernameInput(e.target.value)}
            />
            <input
                onChange={e => passwordInput(e.target.value)}
            />
            <button
                onClick={() => alert(`Username: ${username} Password: ${password}`)}
            >Login</button>
        </div>
    )
}

export default Hooks