import './App.css';
import { useState } from 'react'
import STUDENTS_DATA from './studentsData'
import Student from './Student.jsx'
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CContainer } from '@coreui/react';
function App() {

  const [students, setStudents] = useState(
    STUDENTS_DATA
  )

  return (
  
      <CContainer  className="App"style={{ display: "flex", flexdirection:"row",margin:"0 auto", justifyContent: "center"}} >
      <Student students={students}/>
      </CContainer>

  );
}

export default App;
