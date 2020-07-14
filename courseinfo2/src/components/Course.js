import React from 'react'

const Header = ({ header }) => {
    return (
      <h2>{header}</h2>
    )
  }

const Part = ({name, exercise}) => {
  return(
    <div>
      {name}: {exercise}
    </div>
  )
}

const Content = ({ course }) => {
  return (
    course.map((part) => {
      return <Part key = {part.id} name = {part.name} exercise = {part.exercises} />
    })
  )
}

const Total = ({parts}) => {

  var sum = parts.reduce((acc, exerc) => {
    return acc + exerc.exercises
  },0)
  return(
    <div>
      total of {sum} exercises
    </div>
  )
}


const Course = ({course}) => {
  return (
    <div>
      <Header header = {course.name} />
      <Content course = {course.parts} />
      <Total parts ={course.parts} />
    </div>
  )
}
export default Course