import './App.css';
import { useState } from 'react'
import STUDENTS_DATA from './studentsData'
import Student from './Student.jsx'
function App() {

  const [students, setStudents] = useState(
    STUDENTS_DATA
  )
  
  return (
    <div className="App">
      <Student students={students}/>
    </div>
  );
}

export default App;
