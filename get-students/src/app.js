import React,{useState} from 'react';
import Students from './components/students/students';
const App = () => {
  const [students , setStudents] = useState([
    {id:1,name:'ali',phone:123 , email:'ali@gmail'},
    {id:2,name:'hadi',phone:123 , email:'hadi@gmail'},
    {id:3,name:'mohammad',phone:123 , email:'mohammad@gmail'},
    {id:4,name:'mahdi',phone:123 , email:'mahdi@gmail'},
  ])
  return ( 
  <>
  <Students 
  studentList={students}
  />
  </> );
}
 
export default App;