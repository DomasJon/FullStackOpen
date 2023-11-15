const Header = (headline) => {
    return (
      <div>
        <h1>
          {headline.name}
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
    const part1 = "Fundamentals of React"
    const exercises1 = 10
    const part2 = "Using props to pass data"
    const exercises2 = 7
    const part3 = "State of a component"
    const exercises3 = 14

    return (
      <div>
        <Header name={course} />
        <Content
        part1={part1} exercise1={exercises1}
        part2={part2} exercise2={exercises2}
        part3={part3} exercise3={exercises3}
         />
        <Total total1={exercises1} total2={exercises2} total3={exercises3} />
      </div>
    )
  }

  export default App