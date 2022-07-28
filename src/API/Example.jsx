import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

function Example() {

const [students,setStudents] = useState('')
const [name,setName] = useState('')

const handleClick = async() => {
    const data = await axios.get('http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid')
    setStudents(data)
}
console.log(students)

return (
    <div className="container">
        <h2>Example component</h2>
        <button onClick = {handleClick}>Get students</button>
        <div>
            {JSON.stringify(students.data)}
        </div>
        <button onClick={()=>setStudents(false)} >Hide</button> 
    </div>
);
 }
export default Example;
