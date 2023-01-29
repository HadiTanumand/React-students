import React,{useState , useEffect} from 'react';
import Students from './components/students/students';
import Button from './components/UI/button/button';
import "./app.css"
const App = () => {
  const [studentsState , setStudents] = useState([
    {id:1,name:'ali',phone:123 , email:'ali@gmail'},
    {id:2,name:'hadi',phone:123 , email:'hadi@gmail'},
    {id:3,name:'mohammad',phone:123 , email:'mohammad@gmail'},
    {id:4,name:'mahdi',phone:123 , email:'mahdi@gmail'},
  ])
  const [arrayHolder,setArrayHolder] = useState([])
  const [toggle , setToggle] = useState(false);
  const [searchBarValue , setSearchBarValue] = useState('');

  useEffect(()=>{
    setArrayHolder(studentsState)
  },[])

  const searchFilterFunction =(event)=>{
    const itemData = arrayHolder.filter((item)=>{
      const itemData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
      // console.log(itemData.indexOf(textData)>-1);
      return itemData.indexOf(textData)>-1
      
    })
    setStudents(itemData);
    setSearchBarValue(event.target.value)
  }

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
  <input type="text" value={searchBarValue} onChange={searchFilterFunction} className="search-bar"/>
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
  toggle={toggle} 
  />
  </> );
}
 
export default App;