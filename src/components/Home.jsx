import React from 'react'
import { NavLink } from 'react-router-dom'



const Home = () => {
  return (
    <>
         
        <div className='md:max-w-screen-lg mx-auto mt-5'>
            <NavLink to="/create" ><button className='bg-blue-700 hover:bg-blue-600 ease-in-out py-2 px-4 rounded-md font-medium text-white'> + Add Employee</button></NavLink>
            <div>
                <table className='table-auto w-full border-collapse border mt-6'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2 text-left font-medium'>No.</th>
                            <th className='border px-4 py-2 text-left font-medium'>Name</th>
                            <th className='border px-4 py-2 text-left font-medium'>Email</th>
                            <th className='border px-4 py-2 text-left font-medium'>Position</th>
                            <th className='border px-4 py-2 text-left font-medium'>Salary</th>
                        </tr>
                        <tbody>
                            {/* Add Employee data here */}
                        </tbody>
                    </thead>
                </table>
            </div>
        </div>
    </>
  )
}

export default Home