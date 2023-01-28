import React from 'react';
import './student.css';
import Button from './../../UI/button/button';

const Student = (props) => {
  return (
  <>
  <div className="students">
            <label>شماره دانش آموزی :{props.id}</label>
            <label>نام و نام خانوادگی</label>
            <input type="text" value={props.name} onChange={props.nameChanged}/>

            <label>کلاس</label>
            <input type="number" value={props.id}/>

            <label>شماره تلفن</label>
            <input type="number" value={props.phone}/>

            <label>ایمیل</label>
            <input type="email"value={props.email} />

            <label >
              <Button
              btnType='danger'
              clicked={props.deleted}
              >
                حذف
              </Button>
            </label>
            
        </div>
  </> );
}
 
export default Student;