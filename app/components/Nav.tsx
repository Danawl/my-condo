'use client'

import React from 'react'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '#contact', label: 'Contact'},
  { href: '#map', label: 'Map' }
]
const Nav = () => {
  return (
    <nav className='section-br shadow-md'>
      <div className='mx-auto px-8 py-6'>
        <ul className='flex space-x-8 justify-end mr-8'>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='text-white hover:text-primary font-light text-md px-4 cursor-pointer'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav