import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
        setDesignation(localStorage.getItem('designation'))
        setSalary(localStorage.getItem('salary'))

    }, []);
    
    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`https://675b05339ce247eb193566f9.mockapi.io/crud/${id}`,
            {name:name, email:email, designation:designation, salary:salary},
            console.log({name, email, designation, salary}),
        )
       .then(() => {
        navigate('/');
       })
    }

  return (
    <div className='md:max-w-screen-lg mx-auto mt-5'>
       <form action="">
       <h2 className="text-2xl font-semibold text-blue-700">Employee Information</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="employee_name" className="block text-md/6 font-medium text-gray-900">
               Employee Name
              </label>
              <div className="mt-1">
                <input onChange={(e) =>setName(e.target.value)}
                value={name}
                  id="employee_name"                  name="employee_name"
                  type="text"
                  className="block w-[30vw] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
        </div>
        <div className="sm:col-span-4 mt-2">
              <label htmlFor="email" className="block text-md/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input onChange={(e) =>setEmail(e.target.value)}
                value={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-[30vw] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
        </div>   
        <div className="sm:col-span-4 mt-2">
              <label htmlFor="designation" className="block text-md/6 font-medium text-gray-900">
                Designation
              </label>
              <div className="mt-1">
                <input onChange={(e) =>setdesignation(e.target.value)}
                value={designation} 
                  id="designation"
                  name="designation"
                  type="text"
                  autoComplete="position"
                  className="block w-[30vw] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
        </div>   
        <div className="sm:col-span-4 mt-2">
              <label htmlFor="salary" className="block text-md/6 font-medium text-gray-900">
                Salary
              </label>
              <div className="mt-1">
                <input onChange={(e) =>setSalary(e.target.value)}
                value={salary}
                  id="salary"
                  name="salary"
                  type="text"
                  autoComplete="salary"
                  className="block w-[30vw] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
        </div>
        <button type="submit" onClick={updateHandler} className='bg-blue-700 hover:bg-blue-600 ease-in-out py-1 px-4 rounded-md font-medium text-white mt-4' > save
                </button>
        </form>   
    </div>
  )
}

export default Update