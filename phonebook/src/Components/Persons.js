import React from 'react'

const Persons = (props) => {

    return(
        <ul>
        {props.persons.filter(text => text.name.toLowerCase()
          .includes(props.filter))
          .map((person, key) => 
          <li key = {person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    )
}

export default Persons