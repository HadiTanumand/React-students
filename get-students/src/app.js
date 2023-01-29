import React,{useState} from 'react';
import Students from './components/students/students';
import Button from './components/UI/button/button';
const App = () => {
  const [studentsState , setStudents] = useState([
    {id:1,name:'ali',phone:123 , email:'ali@gmail'},
    {id:2,name:'hadi',phone:123 , email:'hadi@gmail'},
    {id:3,name:'mohammad',phone:123 , email:'mohammad@gmail'},
    {id:4,name:'mahdi',phone:123 , email:'mahdi@gmail'},
  ])
  const [toggle , setToggle] = useState(false);

  const nameChangedHandler = (event,id)=>{
   const studentIndex = studentsState.findIndex((student)=>{
    return student.id === id
   })
   const newStudent = {...studentsState[studentIndex]}
   newStudent.name = event.target.value ;
   const students = [...studentsState];
   students[studentIndex] = newStudent;
   setStudents(students)
  }
  const deleteHandler = (index)=>{
    const students = [...studentsState]
    students.splice(index , 1);
    setStudents(students)
  }

  const toggleHandler =()=>{
    setToggle(!toggle)
    console.log(toggle);
  }

  return ( 
  <>
  <Button 
  btnType='success'
  clicked={toggleHandler}
  >
    تغییر نمایش وضعیت
  </Button>
  <Students 
  studentList={studentsState}
  nameChanged={nameChangedHandler}
  deleted={deleteHandler}  
  />
  </> );
}
 
export default App;