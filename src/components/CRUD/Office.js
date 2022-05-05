import React from 'react'
import { db } from '../../firebase'
import OfficeForm from './OfficeForm'


function Office() {
  
  const addOrEditOffice = async (linkObject)=>{
   await db.collection("office").doc().set(linkObject)
   console.log("Added")
  }
  
  return (
    <div>
      <OfficeForm addOrEditOffice={addOrEditOffice}/>
    </div>
  )
}

export default Office