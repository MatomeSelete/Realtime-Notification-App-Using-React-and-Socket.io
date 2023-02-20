
import { useState } from 'react';
import './Card.css';

import React from 'react'
import Heart from '../../images/heart.svg'
import Comment from '../../images/comment.svg'
import Info from '../../images/info.svg'
import Message from '../../images/message.svg'
import Notification from '../../images/notification.svg'
import Setting from '../../images/settings.svg'
import Share from '../../images/share.svg'
import HeartFilled from '../../images/Heartfilled.svg'

function Card({ post }) {

const [liked, setLiked] = useState(false);

  const handleNotification = ()=> {
    setLiked(true)
  }

  const handleNotificationNot = ()=> {
    setLiked(false)
  }

  return (
    <div className='card'>
      <div className='info'>
        <img src={post.userImg} alt='' className='userImg' />
        <span> {post.fullname} </span>
      </div>
      <img src={post.postImg} className="postImg" />
      <div className="interaction">

      { liked ? (
        <img src={HeartFilled} className='cardIcon' onClick={handleNotificationNot}/>
    ) : (
      <img src={Heart} className='cardIcon' onClick={handleNotification} />
    )}
        
        <img src={Comment} className='cardIcon' />
        <img src={Share} className='cardIcon' />
        <img src={Info} className='cardIcon infoIcon ' />
      </div>
    </div>
  )
}

export default Card