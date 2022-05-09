import './App.css';
import Course from './components/Course';

const App = () => {
  const courses = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercieses: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercieses: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercieses: 14,
        id: 3
      },
      {
        name: 'tuleeko uusi lisätty näkyviin',
        exercieses: 10,
        id: 4
      }
    ]
  },
  {
    id: 2,
    name: "Node.js ",
    parts: [
      {
        id: 1,
        name: "routing",
        exercieses: 3
      },
      {
        id: 2,
        name: "middleware",
        exercieses: 7
      }
    ]
  }
]
  return (
    <div className="body">
      <h2>react App selaimessa</h2>
      {courses.map((courses) => (
         <Course key={courses.id} courses={courses} />
      ))}
    </div>
  )
}

export default App;
