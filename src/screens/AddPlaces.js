import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addnewPlace } from '../Js/PlaceSlice/PlaceSlice'
const AddPlaces = () => {
    const [place, setplace] = useState ({
id :Math.random(),
name:"",
description:"",
img:"",
price:"",
Visited:0,



    })

    const dispatch = useDispatch();
  return (
    <div className='add'>
     <h1> Add new place</h1>
    <form>
<input type="text" placeholder='Name' onChange= {(e) =>setplace({...place, name: e.target.value})}/>
<input type="text" placeholder='Image' onChange= {(e) =>setplace({...place, img: e.target.value})}/>
<input type="text" placeholder='Description' onChange= {(e) =>setplace({...place, Description: e.target.value})}/>
<input type="number" placeholder='Price' onChange= {(e) =>setplace({...place, price: e.target.value})}/>
<button onClick={(e)=>{

e.preventDefault();

dispatch(addnewPlace(place))}}>ADD</button>
</form>
       
    </div>
  )
}

export default AddPlaces