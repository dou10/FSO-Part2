import React from 'react'

const Persons = ({persons,filters,deletePerson}) => {
    return(
        <ul>
        {persons.filter(text => text.name.toLowerCase()
          .includes(filters))
          .map((person, key) => 
          <li key = {person.id}>{person.name} {person.number}<button onClick={() => deletePerson(person.id) } >delete</button> </li>
        )}
      </ul>
    )
}

export default Persons