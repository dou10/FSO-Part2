import React, { useState,useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import backend from './services/backend'

const App = () => {
  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter] = useState('')
  const [sucessMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    backend
      .getAll()
      .then(intialPersons => {
        setPersons(intialPersons)
      })
  }

  useEffect(hook,[])

  const addPerson = (event) => {
    event.preventDefault()

    const targetName = persons.some(person =>person.name === newName)
    const targetNumber = persons.some(person => person.number === newNumber)
    

    console.log(targetName,targetNumber)

    if(targetName){
      if(targetNumber){
        alert('Person has already been added')
      }

      else{
        if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
          console.log('updating')

          const nameToUpdate = persons.find(person => person.name === newName)
          const targetId = nameToUpdate.id
          const updatedRecord = {...nameToUpdate, number: newNumber}

          console.log(targetId)
          backend
          .update(targetId,updatedRecord)
          .then(returnedRecord => {
            setPersons(persons.map(note => note.id !== targetId ? note : returnedRecord))
          })
          setSuccessMessage(`${newName} has been updated`)
          setTimeout(() => {
            setSuccessMessage(null)
          },5000 )
        }
      }

    }

    else{
      const personObject = {
        name: newName,
        number: newNumber
      }
      backend
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewNumber('')
          setNewName('')
          setSuccessMessage(`${personObject.name} has been added to the phonebook`)
          setTimeout(() => {
            setSuccessMessage(null)
          },5000 )
        })
      }
    }

  const deletePerson = (id) => {
 
    console.log(id)
    if(window.confirm('Do you want to delete?')){
      backend
        .deleteRecord(id)
        .then(newList => {
          setPersons(persons.filter(item => item.id !== id))
          setSuccessMessage(`Record has been deleted from the phonebook`)
          setTimeout(() => {
            setSuccessMessage(null)
          },5000 )
        })
        .catch(error => {
          setErrorMessage(`Error: ${persons.find(item => item.id === id).name} has already been deleted`)
          setTimeout(() => {
            setErrorMessage(null)
          },5000 )
        })
      }
  }

  const handleNameChange =(event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) =>{
    console.log(event.target.value)
    setFilter(event.target.value.toLowerCase())
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="sucess">
        {message}
      </div>
    )
  }

  const ErrorNotification = ({message}) => {
    if(message === null){
      return null
    }

    return(
        <div className="error">
          {message}
        </div>
      
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={sucessMessage} />
      <ErrorNotification message={errorMessage} />
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
      <Persons persons = {persons} filters={filter} deletePerson = {deletePerson} />
      
    </div>
  )
}

export default App

