const Header = (headline) => {
  return (
    <div>
      <h1>
        {headline.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p> {props.part} {props.exercise} </p>
  )
}

const Content = (information) => {
  return (
    <div>
      <Part part={information.part1} exercise={information.exercise1} />
      <Part part={information.part2} exercise={information.exercise2} />
      <Part part={information.part3} exercise={information.exercise3} />
    </div>
  )
}

const Total = (sum) => {
  return (
    <div>
      <p>
        Number of exercises {sum.total1 + sum.total2 + sum.total3}
      </p>
    </div>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
  name: "Using props to pass data",
  exercises: 7
  }
  const part3 = {
  name: "State of a component",
  exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
      part1={part1.name} exercise1={part1.exercises}
      part2={part2.name} exercise2={part2.exercises}
      part3={part3.name} exercise3={part3.exercises}
       />
      <Total total1={part1.exercises} total2={part2.exercises} total3={part3.exercises} />
    </div>
  )
}

export default App