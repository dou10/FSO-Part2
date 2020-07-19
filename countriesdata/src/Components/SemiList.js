import React from 'react'


const SemiList = (props) => {

    const clickToViewInfo = (country) =>{
        props.setResult([country]);
    }

    return(
        <div>
        
            {props.result.filter(text => text.name.toLowerCase()
            .includes(props.selector))
            .map((country, key) => 
            <div key = {country.name}>{country.name}
            <button onClick={() => clickToViewInfo(country)}>Info</button>
            </div>
            
            )}
            
        </div>
    )
}
export default SemiList