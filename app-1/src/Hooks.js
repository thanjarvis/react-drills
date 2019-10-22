import React, {useState} from 'react'

const Hooks = () => {
    const [input, setInput] = useState('')

    return(
        <div id='input-div'>
            <input
                onChange={e => setInput(e.target.value)}
            />
            {input}
        </div>
    )
}



export default Hooks