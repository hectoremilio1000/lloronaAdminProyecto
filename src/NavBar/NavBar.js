import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
      <nav className='bg-white shadow-md'>
          <div className='max-w-6xl mx-auto px-4'>
              <div className='flex justify-between'>
                  <div className='flex space-x-2'>
                      <div>
                          {/* Website Logo */}
                          <NavLink to="/">
                          <div className='flex items-center py-4 px-2'>
                              <span className='font-semibold text-gray-500 text-sm md:text-lg'>
                                  ASIRIS
                              </span>
                              </div>
                          </NavLink>
                      </div>



                  </div>
                  
              </div>
          </div>
      </nav>
  )
}

export default NavBar