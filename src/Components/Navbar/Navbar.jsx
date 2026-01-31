
import React, { useState } from 'react';
import { X } from 'lucide-react';

import {  Menu } from 'lucide-react';
import Link from './Link';
const navigationData = [
  {
    name: "Home",
    path: "/home",
    id: 1
  },
  {
    name: "About",
    path: "/about",
    id: 2
  },
  {
    name: "Services",
    path: "/services",
    id: 3
  },
  {
    name: "Blog",
    path: "/blog",
    id: 4
  },
  {
    name: "Contact",
    path: "/contact",
    id: 5
  }
];

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const links =  navigationData.map(route =><Link route={route}  ></Link>)
    return (
      <div>
       <nav>
           <span onClick={()=>setOpen(!open)} >
            {open? <X className ='md:hidden' />:    <Menu className='md:hidden' ></Menu>}
        <ul className=' md:hidden ' >
               {
            links
         }
        </ul>
            <h1>My Navabr</h1>
           </span>
             
            <ul className='md:flex hidden justify-around'>
           {
           links
           } 
        </ul>
        </nav>
{/* <ul className='flex justify-around'>
    {
    navigationData.map(route =><li><a key={route.id} href={route.link}>{route.name}</a></li> )
}

</ul> */}

          {/* // <div className='flex justify-around
        // ' >
        //     <li><a href="">Home</a></li>
        //     <li><a href="">About</a></li>
        //     <li><a href="">Contat</a></li>
        // </div> */}
      </div>
    );
};

export default Navbar;