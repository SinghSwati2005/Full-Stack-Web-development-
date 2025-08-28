import React, { useState } from 'react'

const Radio = () => {

    const [gender, setGender] =useState('female');
    const [city,setCity]= useState ('orissa')
  return (
    
    <div>
        <h2>Handle radio and dopdown </h2>
        <h4>select gender</h4>
        <input type="radio" onChange={(event)=>setGender(event.target.value)} 
        value={"male"} name='gender' id='male'  checked={gender=='male'} />
        <label htmlFor="male">Male</label>
        <input type="radio" onChange={(event)=>setGender(event.target.value)}
         value={"female"} name='gender' id='female' checked={gender=='female'} />
        <label htmlFor="female">Female</label>
        <h2>elected gender : {gender}</h2>
        <br />
        <h4>elect city</h4>
        <select onChange={(event)=>setCity(event.target.value)} defaultValue={"orissa"}>
            <option value="noida">Noida</option>
            <option value="bengal">bengal</option>
            <option value="orissa">orissa</option>
        </select>
        <h2>slectd cirty : {city}</h2>
    </div>
  )
}

export default Radio