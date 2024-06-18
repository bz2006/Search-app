import React from 'react'
import "./header.css"

function Header() {
  return (
    <div style={{display:"flex",alignItems:"center",width:"100%",backgroundColor:"white",boxShadow:"0 4px 2px -2px rgba(0, 0, 0, 0.9)"}}>
        <div style={{marginLeft:"20px"}}>
            <h2>Search It!</h2>
        </div>
        <div className='nav'>
            <a href='/' className='nav-ch'>New Seacrh</a>

            <a href='/add-new' className='nav-ch'>Add New</a>
        </div>
    </div>
  )
}

export default Header