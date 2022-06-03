import './App.css';
import { useState } from 'react'
import STUDENTS_DATA from './studentsData'
import Student from './Student.jsx'
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCard, CCardHeader, CCardBody } from '@coreui/react';
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
