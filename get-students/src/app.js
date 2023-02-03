import React,{useState , useEffect , useRef} from 'react';
import Students from './components/students/students';
import Button from './components/UI/button/button';
import "./app.css"
const App = () => {
  const Elm1 = useRef(null);
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
    setArrayHolder(studentsState);
    Elm1.current.focus();
  },[])

  const searchFilterFunction =(event)=>{
    const itemData = arrayHolder.filter((item)=>{
      const itemData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
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
  }

  const getScroll = ()=>{
    window.scroll(0,0);
  }

  return ( 
    <BrowserRouter>
    <AuthContextProvider >
        <StudentsContextProvider>          
          <div className="App" style={{background:theme.bg,color:theme.syntax}}> 
            <Toolbar />
            
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/add-student" exact render={()=>(
                  <Suspense fallback={<p>...loading</p>}>
                    <AddStudent />
                  </Suspense>)} 
                />
                <Route path="/student/:studentid" exact component={EditStudent} />
                <Route render={()=><h1>not Found</h1>} />
              </Switch>
              
              
            
            
        </div>
      </StudentsContextProvider>
    </AuthContextProvider>
    
  </BrowserRouter> );
}
 
export default App;