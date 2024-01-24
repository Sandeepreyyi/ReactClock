import React from 'react'
import './compo.css'
import { Link } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='lay'>
        {/* <nav> */}          
               <h4><Link to="/">Clock</Link></h4> 
               <h4> <Link to="/timer">Timer</Link></h4>
               <h4><Link to="/stopwatch">Stopwatch</Link></h4> 
               {/* <h4><Link to="/alarm">Alarm</Link></h4> */}
        {/* </nav> */}
    </div>
    
  )
}
export default Layout
