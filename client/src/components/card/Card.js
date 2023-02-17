import React from 'react'
import Heart from '../../images/heart.svg'
import Comment from '../../images/comment.svg'
import Info from '../../images/info.svg'
import Message from '../../images/message.svg'
import Notification from '../../images/notification.svg'
import Setting from '../../images/settings.svg'
import Share from '../../images/share.svg'



import './Card.css'

function Card({ post }) {
  return (
    <div className='card'>
        <div className='info'>
        <img src={post.userImg} alt='' className='userImg' />
        <span> { post.fullname } </span>
        </div>
    <img src={ post.postImg } className="postImg" />
    <div className="interraction">
        <img src={Heart} className='cardIcon' />
        <img src={ Comment } className='cardIcon' />
        <img src={ Share } className='cardIcon' />
        <img src={ Info } className='cardIcon' />
    </div>
    </div>
  )
}

export default Card