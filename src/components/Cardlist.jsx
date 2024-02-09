import React from 'react'

const Cardlist = (props) => {
  return (props.validdata)?
    (<div className="card" >
    <div className="card-in">
      <div className='card-img'>
        <img src={props.item.imgurl} alt=''/>
        </div>
        <div className='card-details'>
           <h2>{props.item.Title}</h2>
        <p>{props.item.cityname}</p>
        <h4>{props.item.statename}</h4> 
        </div>
        <div className="del-btn"><button onClick ={()=> props.del(props.index)}>Delete</button>
        </div>
        
    </div> 
    </div>):"";
}

export default Cardlist