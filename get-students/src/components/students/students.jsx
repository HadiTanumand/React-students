import React from 'react'; 
import Student from './student/student'

const Students = (props) => {
  return ( 
  props.studentList.map((student,index)=><Student 
  key={index}
  id={student.id} 
  name={student.name}
  phone={student.phone}
  email={student.email}
  />)
  );
}
 
export default Students;