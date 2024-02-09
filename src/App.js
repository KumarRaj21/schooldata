import './App.css';
import Addschool from './components/Addschool';
import Navbar from './components/Navbar';
import Showschool from './components/Showschool';
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [list,setlist]=useState([]);
  const [validdata,setvaliddata]=useState(false)
  const deletefunction =(index1)=>{
        setlist((old)=>{
      return old.filter((item,index)=>{
        return index1 !== index;
      })
    })
  }
  return (<div className='App-containter'>
    <div className='App-header'>
      <h1>Schools data </h1>
    </div>
    <div className='Nav'>
      <Navbar/>
    </div>
    <div className='App-body'>
      <Routes>
        <Route path='/' element={<Showschool array={list} setarray ={setlist} del={deletefunction} validdata={validdata} setvaliddata={setvaliddata}/>} />
        <Route path='/addschool' element={<Addschool array={list} setarray ={setlist} validdata={validdata} setvaliddata={setvaliddata}/>}/>
      </Routes>
     </div>
  </div>
  );
}

export default App;
