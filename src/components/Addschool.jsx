import React, { useState } from 'react'


const Addschool = (props) => {
    const [fname,setfname] = useState("");
    const [cityname,setcityname] =useState("");
    const [contactval,setcontactval]=useState("");
    const [emailval,setemailval]=useState("");
    const [statename,setstatename]=useState("");
    const [imgurl,setimgurl]=useState("");
    const [errors,seterrors]=useState({
      email:"",
      name:"",
      city:"",
      contact:"",
      statename:"",
      imgurl:"",
    })
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailvalid =()=>{
  if (emailval.trim()===""){
    seterrors((errors)=>({...errors,email:"Enter email Address"}))
  }
  else if (!pattern.test(emailval)) {
    seterrors((errors)=>({...errors,email:"Enter vaild email"}))
  }
  else {
    seterrors((errors)=>({...errors,email:""}))
  }
}
const namevalid =()=>{
  if (fname.trim()===""){
    seterrors((errors)=>({...errors,name:"Enter School name"}))
  }
  else {
    seterrors((errors)=>({...errors,name:""}))
  }
}
const citynamevalid =()=>{
  if (cityname.trim()===""){
    seterrors((errors)=>({...errors,city:"Enter city name"}))
  }
  else {
    seterrors((errors)=>({...errors,city:""}))
  }
}
const contactvalid =()=>{
  if (contactval.trim()===""){
    seterrors((errors)=>({...errors,contact:"cant be empty"}))
  }
  else {
    seterrors((errors)=>({...errors,contact:""}))
  }
}
const statevalid =()=>{
  if (statename.trim()===""){
    seterrors((errors)=>({...errors,statename:"Enter State name"}))
  }
  else {
    seterrors((errors)=>({...errors,statename:""}))
  }
}
const imgvalid =()=>{
  if (imgurl.trim()===""){
    seterrors((errors)=>({...errors,imgurl:"cant be empty"}))
  }
  else {
    seterrors((errors)=>({...errors,imgurl:""}))
  }
}
    const handlesubmit=(e)=>{
        e.preventDefault();
        setfname("");
        setcityname("");
        setcontactval("");
        setemailval("");
        setstatename("");
        setimgurl("");
     emailvalid();
     namevalid();
     contactvalid();
     statevalid();
     citynamevalid();
     imgvalid();
     if (emailval.trim() !=="" && pattern.test(emailval) && fname.trim()!=="" && cityname.trim() !=="" && contactval.trim() !=="" && statename.trim()!=="" && imgurl.trim()!==""){
       props.setvaliddata(true);
       console.log(props.validdata);
     }
    }
    const handleSave=()=>
{
     emailvalid();
     namevalid();
     contactvalid();
     statevalid();
     citynamevalid();
     imgvalid();
     if (emailval.trim() !=="" && pattern.test(emailval) && fname.trim()!=="" && cityname.trim() !=="" && contactval.trim() !=="" && statename.trim()!=="" && imgurl.trim()!==""){
      props.setvaliddata(true);
      let SchlObj={}
      SchlObj['Title']= fname
      SchlObj['cityname']= cityname
      SchlObj['contactval']=contactval
      SchlObj['emailval']=emailval
      SchlObj['statename']=statename
      SchlObj['imgurl']=imgurl
        props.setarray((old)=>{
        const updatedlist = [...old,SchlObj];
          console.log(updatedlist);
          return updatedlist;
       })
    }
}
  return (
    <div className='add-container'>
        <div className='add-header'>
           <h2>Add School Details Here</h2> 
        </div>
        <div className='add-body'>
            <form action='' onSubmit={handlesubmit}>
             <input type='text' placeholder='School Name' value={fname} onChange={(e)=>setfname(e.target.value)}/>
             {errors.name && <span className='error-text'>{errors.name}</span>}
             <input type='text' placeholder='city'value={cityname} onChange={(e)=>setcityname(e.target.value)} />
             {errors.city && <span className='error-text'>{errors.city}</span>}
             <input type='text' placeholder='state' value={statename} onChange={(e)=>setstatename(e.target.value)}/>
             {errors.statename && <span className='error-text'>{errors.statename}</span>}
             <input type='number' placeholder='contact' value={contactval} onChange={(e)=>setcontactval(e.target.value)}/>
             {errors.contact && <span className='error-text'>{errors.contact}</span>}
             <input type='email' placeholder='email' value={emailval} onChange={(e)=>setemailval(e.target.value)}/>
             {errors.email && <span className='error-text'>{errors.email}</span>}
             <input type='text' placeholder='image url' value={imgurl} onChange={(e)=>setimgurl(e.target.value)}/>
             {errors.imgurl && <span className='error-text'>{errors.imgurl}</span>}
             <button onClick={handleSave}>Add School</button>
            </form>
        </div>
    </div>
  )
}

export default Addschool