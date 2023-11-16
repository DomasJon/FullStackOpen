/* eslint-disable react/jsx-key */
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {

  const items = props.parts.map(function(value) {

    return (
      <div>
        <p>
          {value.name}: {value.exercises}
        </p>
      </div>
    )
  })

  return items
};

const Total = (props) => {

  var total = 0;

  props.parts.map(function(value) {
    total = total + value.exercises
  })

  return (
    <div>
      <p>
        Number of exercises: {total}
      </p>
    </div>
  )
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App