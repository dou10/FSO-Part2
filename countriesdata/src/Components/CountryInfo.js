import React from 'react'

const CountryInfo = (props) =>{
    return(
        <div> 
            <h1>{props.result.name}</h1>
            <div>{props.result.capital} </div>
            <div>{props.result.population} </div>
            <h2>Languages</h2>
            <ul>
                {props.result.languages.map((language, key) =>
                 <li key={language.name}> {language.name} </li>  )  }
            </ul>

            <img src = {props.result.flag} height='100' width='175' />
        </div>
    )
}
export default CountryInfo