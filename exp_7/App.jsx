import './App.css'
import Students from './Components/Students'

function App() {
  return (
    <div className="container">

      <h1><u>Student Dashboard</u></h1>

      <div className="card-container">

        <Students
          name="Arpit Agnihotri"
          age={19}
          physics={93}
          chemistry={85}
          maths={90}
        />

        <Students
          name="Rahul Sharma"
          age={20}
          physics={70}
          chemistry={75}
          maths={80}
        />

        <Students
          name="Priya Verma"
          age={18}
          physics={88}
          chemistry={82}
          maths={91}
        />

        <Students
          name="Ankit Singh"
          age={21}
          physics={60}
          chemistry={65}
          maths={70}
        />

        <Students
          name="Sneha Gupta"
          age={19}
          physics={92}
          chemistry={89}
          maths={95}
        />

      </div>
    </div>
  )
}

export default App