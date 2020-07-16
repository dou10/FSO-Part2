import React, {useState,useEffect} from 'react';
import Axios from 'axios';


function App() {
const [countries, setCountries] = useState([])

const hook = () => {
  console.log('effect')
    Axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }

useEffect(hook,[])
  return (
    <div>
      find countries <input />
    </div>
  )
}

export default App;
