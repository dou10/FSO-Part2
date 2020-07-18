import React, {useState,useEffect} from 'react'
import Axios from 'axios'
import CountryInfo from './CountryInfo'
import SemiList from './SemiList'
import Weather from './Weather'

const Information = (props) => {
    const [countries, setAllCountries] = useState([])
    const [result, setResult] = useState([])

    useEffect(() => {
        Axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {        
          setAllCountries(response.data)
        })
    },[])
    
    useEffect(() => {
        setResult(
            countries.filter(text => text.name.toLowerCase()
            .includes(props.selector))
        )
    }, [props.selector])

    if(result.length === 1){
        return(
            <div>
                <CountryInfo result ={result[0]} />
                <Weather name = {result[0].capital} />
            </div>
            
            
        )
    }
    
    if (result.length< 10 && result.length > 1){
        return(
            <SemiList result = {result} selector={props.selector} setResult ={setResult} />
        )
    }
    return(
        <div>Too many matches, specify another filter</div>
    )
}

export default Information