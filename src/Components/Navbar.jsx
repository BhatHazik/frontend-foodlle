import React, { useEffect, useState } from 'react'
import "../Styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBarsStaggered, faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = (props) => {

const navigate = useNavigate();
const [log, setLog] = useState('');
const isLoggedin = localStorage.getItem('token');



  
  const loginText = () =>{
    if(isLoggedin){
    
      setLog('logout');
    }
    else if(!isLoggedin){
      setLog('login');
    }
  }


useEffect(()=>{
  loginText();
},[loginText]);



 const handleLogout = ()=>{
  if(isLoggedin){
    localStorage.removeItem('token');
    navigate('/');
  }
  
  else if(!isLoggedin){
    navigate('/login');
  }
 }

  return (
    <div className={props.divName}>

        <div className={props.leftNav}>

            <h1>Foodlle</h1>
        </div>
<div className='centre-nav'>
  <Link to='/'><h4>HOME</h4></Link>
          <Link to='/menu'><h4>MENU</h4></Link>
          <Link to='/about'><h4>ABOUT</h4></Link>
          <Link to='/recipes'><h4>RECIPIES</h4></Link>
</div>
        <div className='right-nav'>
          <Link onClick={props.function}>
            <FontAwesomeIcon className={props.button} icon={faCircleHalfStroke} />
          </Link>
        
          <button className='signup-btn' onClick={handleLogout}>{log}</button>
          <h3><FontAwesomeIcon icon={faBarsStaggered} /></h3>

        </div>



    </div>
  )
}

export default Navbar