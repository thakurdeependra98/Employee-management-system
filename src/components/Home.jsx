import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Home = () => {

    const [data, setData] = useState([])
    function getdata (){
        axios.get('https://675b05339ce247eb193566f9.mockapi.io/crud')
        .then((res) =>{
            setData(res.data)
        })
    }
    useEffect(() => {
        getdata();
    }, []);
    
    const setLocalStoarage = (id, name, email, designation, salary) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('designation', designation)
        localStorage.setItem('salary', salary)
    }

    const deleteHandeler = (id) => {
        axios.delete(`https://675b05339ce247eb193566f9.mockapi.io/crud/${id}`)
       .then((res) => {
        getdata();
       })
    }

  return (
    <>
        <div className='md:max-w-screen-xl mx-20 mt-5'>
            <NavLink to="/create" ><button className='bg-blue-700 hover:bg-blue-600 ease-in-out py-2 px-4 rounded-md font-medium text-white'> + Add Employee</button></NavLink>
            <div>
                <table className='table-auto w-full border-collapse border mt-6'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2 text-left font-medium'>No.</th>
                            <th className='border px-4 py-2 text-left font-medium'>Name</th>
                            <th className='border px-4 py-2 text-left font-medium'>Email</th>
                            <th className='border px-4 py-2 text-left font-medium'>Designation</th>
                            <th className='border px-4 py-2 text-left font-medium'>Salary</th>
                        </tr>
                    </thead>
                    {data.map((each)=>{
                        return (
                            <tbody key={each.id}>
                                <tr>
                                    <td className='border px-4 py-2 text-left'>{each.id}</td>
                                    <td className='border px-4 py-2 text-left'>{each.name}</td>
                                    <td className='border px-4 py-2 text-left'>{each.email}</td>
                                    <td className='border px-4 py-2 text-left'>{each.designation}</td>
                                    <td className='border px-4 py-2 text-left'>{each.salary}</td>
                                    <td> <Link to="/update" ><button onClick={()=>setLocalStoarage(each.id, each.name, each.email, each.designation, each.salary)} className='flex items-center gap-2 text-white p-3 rounded-full bg-sky-200 '> <MdEdit className='bg-sky-200'/></button></Link> </td>
                                    <td> <button onClick={()=>deleteHandeler(each.id)} className='flex items-center gap-2 text-white p-3 rounded-full bg-red-700'> <MdDelete className='bg-red-700'/></button></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    </>
  )
}

export default Home