import React, { useState } from 'react'
import Heart from '../../images/heart.svg'
import Comment from '../../images/comment.svg'
import Info from '../../images/info.svg'
// import Message from '../../images/message.svg'
// import Notification from '../../images/notification.svg'
// import Setting from '../../images/settings.svg'
import HeartFilled from '../../images/heart-solid.svg'
import Share from '../../images/share.svg'

import './Card.css'

function Card({ post }) {

  const [liked, setLiked] = useState(false)

  const handleNotification = ()=> {
    setLiked(true)
  }

  return (
    <div className='card'>
        <div className='info'>
        <img src={post.userImg} alt='' className='userImg' />
        <span> { post.fullname } </span>
        </div>
    <img src={ post.postImg } alt='' className="postImg" />
    <div className="interaction">

      {liked? (
        <img src={ HeartFilled } alt='' className='cardIcon' />
      ) : (
        <img src={Heart} alt='' className='cardIcon'  onClick={ handleNotification }/>
      )}
        
        <img src={ Comment } alt='' className='cardIcon' />
        <img src={ Share } alt='' className='cardIcon' />
        <img src={ Info } alt='' className='cardIcon infoIcon' />
    </div>
    </div>
  )
}

export default Card