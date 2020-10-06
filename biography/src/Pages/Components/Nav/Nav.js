import React from 'react';

const Nav=()=>{
    const navItems =['Mizeck Victor Tembo','About', ' Contacts']


    return(
      <header className='Navheader'>
          <nav className='Nav'>
              {navItems.map(navItem=>(
                  <li name={navItem}>{navItem}</li>
              ))}

          </nav>
      </header>
        );
}
export default Nav;