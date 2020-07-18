import React, {useState,useEffect} from 'react';

import Selector from "./Components/Selector"
import Information from './Components/Information';


function App() {

const [selector, setSelector] = useState('')

  const handleSelectorChange = (event) => {
    setSelector(event.target.value.toLowerCase())
  }

  return (
    <div>
      <Selector selector ={selector} handleSelectorChange = {handleSelectorChange}/>
      <Information selector = {selector}/>
      
    </div>
  )
}

export default App;
