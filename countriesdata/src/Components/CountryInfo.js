import React from 'react'

const CountryInfo = (props) =>{

    const populationWithCommas = props.result.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


    return(
        <div> 
            <h1>{props.result.name}</h1>
            <div> Capital: {props.result.capital} </div>
            <div>Population: {populationWithCommas} </div>
            <h2>Spoken Languages</h2>
            <ul>
                {props.result.languages.map((language, key) =>
                 <li key={language.name}> {language.name} </li>  )  }
            </ul>

            <img src = {props.result.flag} height='100' width='175' />
        </div>
    )
}
export default CountryInfo