import React from 'react'

const Selector = (props) =>{
    return(
        <div>find countries <input value={props.selector} onChange={props.handleSelectorChange}/> </div>
    )
}

export default Selector