import {React,useState} from 'react'



const  OfficeForm = (props) => {

  const initialStateValues = {
    name :"",
    phone:"",
    mail:"",
    city:"",
      address:"",
      zipcode:"",
    active: true,
    users: [{
        
    }
      

    ]
  }
  const [values,setValues] = useState(initialStateValues)

  const handleInputChange = e =>{
    const {name,value} = e.target
    setValues({...values,[name]: value})

  }

  const handleSubmit = e =>{
    e.preventDefault();
    props.addOrEditOffice(values);
  }

  return (
    <>
    <form className='card card-body' onSubmit={handleSubmit}>
      <div className='form-group'>
        <input type="text" className='form-control' placeholder='Nombre' name='name' onChange={handleInputChange}/>
        <input type="text" className='form-control' placeholder='Telefono' name='phone' onChange={handleInputChange}/>
        <input type="text" className='form-control' placeholder='Email' name='mail' onChange={handleInputChange}/>
        <input type="text" className='form-control' placeholder='Ciudad' name= 'city' onChange={handleInputChange}/>
        <input type="text" className='form-control' placeholder='Direccion' name='address' onChange={handleInputChange}/>
        <input type="text" className='form-control' placeholder='Codigo Postal' name= 'zipcode' onChange={handleInputChange}/>
        <button className='btn btn-primary btn-block'>Guardar</button>
    </div>
    </form>
    </>
   
  )
}

export default OfficeForm