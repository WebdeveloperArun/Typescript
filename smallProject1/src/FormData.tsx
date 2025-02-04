import React, { useState } from 'react'



interface FormData {
    name: string,
    email: string,
    password: string
}

const FormData = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

  return (
   <form>
    <div>
     <label htmlFor="name">Name</label>
     <input type="text" value={formData.name} onChange={handleChange} placeholder='Enter your name' name='name'/>
    </div>
    <div>
     <label htmlFor="email">Email</label>
     <input type="email" value={formData.email} onChange={handleChange} placeholder='Enter your email' name='email'/>
    </div>
    <div>
     <label htmlFor="password">password</label>
     <input type="password" value={formData.password} onChange={handleChange} placeholder='Enter your password' name='password'/>
    </div>
    <div>
        <h1>Name : {formData.name}</h1>
        <h1>Email : {formData.email}</h1>
        <h1>Password : {formData.password}</h1>
    </div>
   </form>
  );
}

export default FormData
