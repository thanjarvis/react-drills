import React, {useState} from 'react'

const Hooks = () => {

    const [list, filterList] = useState(['iceCream', 'ramen', 'veggies', 'candyCorns', 'shoes', 'bacon', 'impulseBuys', 'anythingElse'])
    const [input, changeInput] = useState('')
        

    return(
        <div>
            <input
                value={input}
                onChange={e => changeInput(e.target.value)}/>
            <div>    
                {list.filter(element => element.includes(input)).map(element => <div>{element}</div>)}
            </div>        
        </div>
    )

}

export default Hooks