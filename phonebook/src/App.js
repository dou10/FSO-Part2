<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter] = useState('')

const hook = () => {
  console.log('effect')
  axios.get('http://localhost:3001/persons')
  .then(response => {
    console.log('promised fulfilled')
    setPersons(response.data)
  })
}

useEffect(hook,[])
  const addPerson = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewNumber('')
      setNewName('')
    }
  }

  const handleNameChange =(event) =>{
    setNewName(event.target.value)
  }

=======
import React, { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewNumber('')
      setNewName('')
    }
  }

  const handleNameChange =(event) =>{
    setNewName(event.target.value)
  }

>>>>>>> 7e7a95b08613034c2b841b8606bc0d96e6ead423
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) =>{
    console.log(event.target.value)
    setFilter(event.target.value.toLowerCase())
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} handleFilterChange={handleNewFilter} />
      
      <h2>add a new</h2>
      <PersonForm 
      addPerson={addPerson}
      newName = {newName}
      handleNameChange = {handleNameChange}
      newNumber = {newNumber}
      handleNumberChange = {handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons = {persons} filter={filter} />
      
    </div>
  )
}

export default App

