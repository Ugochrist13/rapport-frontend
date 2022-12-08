import React from 'react'
import { FaTh } from 'react-icons/fa'
import Sidebar from '../sideBar/Sidebar'
import {Link} from 'react-router-dom'
import './Group.css'

function Groups() {
  return (
    <Sidebar>
        <nav className='Edit-navbar'>
                <h3 className='Edit-Profile-text'>Groups</h3>
                <div className="profile-notification">
                  <Link to='/create'><button className='Create-btn'>Create Group</button></Link>
                </div>
            </nav>
    </Sidebar>
    
  )
}

export default Groups