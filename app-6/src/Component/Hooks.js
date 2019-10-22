import React, {useState} from 'react'

const Hooks = () => {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const addItem = () => {
      list.push(input)
      setInput('')
  }
  console.log(list);
  
    return(
        <div>
            <h1>My to do list</h1>
            <input
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={addItem}>Add</button>

            {list.map(element => <div>{element}</div>)}
        </div>
    )
  


}

export default Hooks