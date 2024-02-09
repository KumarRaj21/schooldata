import React from 'react'
import Cardlist from './Cardlist';
const Showschool = (props) => {
  return (props.array.length!==0)?(
      <>            
  <div className="school-container">
  <div className="removeall">
  <button onClick={()=>{
      props.setarray([]);
  }}>Remove All</button>
  </div>
     <div className="cardlist">
      {
      props.array.map((item,index)=>{
          return(  <Cardlist item={item} key ={index}  index={index} del={props.del} validdata ={props.validdata}/> )})
  }
  </div>
  </div>
</>): <div className='school-empty'><h1>Do not have any Schools Add School </h1></div>;
}

export default Showschool