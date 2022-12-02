import React from 'react';
import  { useNavigate, Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import "./navbar.css"

const Navbar = () => {
  return (
    <>
      <header>
        <nav className='nav'>
            <li><Link to={'/'}  className="link"><h1>logo</h1></Link></li>
            <li><div className='avatar'>
                <Avatar style={{background:"#8698FE"}}>H</Avatar>
            </div></li>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
