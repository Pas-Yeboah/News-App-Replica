import React from 'react'

const NavBar = () => {
   const menuItems = ["Home","New","Popular","Trending","Categories"]
  return (
    <nav className='flex  justify-between items-center'>
        <h2 className='font-bold text-6xl'>
            W.
        </h2>
        <div className='flex gap-12 text-gray-500'>
           {menuItems.map(menuItem =>(
            <p key={menuItem}>
            {menuItem}
            </p>
           ))}
        </div>
        
    </nav>
  )
}

export default NavBar