import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-950 text-white flex justify-between px-4 items-center h-14 ' >
        <div className='logo font-bold text-xl'>GetTea</div>
        <ul className='flex justify-end gap-5 '>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign up</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar
