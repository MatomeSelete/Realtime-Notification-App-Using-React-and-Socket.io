import React from 'react'
import Notification from '../../images/notification.svg'
import Message from '../../images/message.svg'
import Settings from '../../images/settings.svg'

import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'> Lama App</span>
      <div className='icons'>
        <div className='icon'>
          <img src={Notification} className='iconImg' />
          <div className='counter'>2</div>
        </div>

        <div className='icon'>
          <img src={Message} className='iconImg' />
          <div className='counter'>2</div>
        </div>

        <div className='icon'>
          <img src={Settings} className='iconImg' />
          <div className='counter'>2</div>
        </div>
      </div>
      Navbar
    </div>

  )
}

export default Navbar