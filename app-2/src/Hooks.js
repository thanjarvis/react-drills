import React, {useState} from 'react'

const Hooks = () => {
    const [list, displayList] = useState(['this', 'is', 'the', 'easiest', 'list', 'ever'])
    return(
        <div>
            <div id='list-div'>
                {list.map((e, index) => {
                    return(
                        <p key={index}>{e}</p>
                    )
                })}

            </div>
        </div>
    )   
}

export default Hooks