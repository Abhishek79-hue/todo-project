import React from 'react'
import CoverImage from "../Images/Cover-Image.jpeg"
import image from "../Images/Profile.jpeg"
import "./ProfileHeader.css"
function ProfileHeader() {
  return (
    <div className='conatiner'>
     <img src={CoverImage} alt='Cover Images'className='cover-pic'/>
     <img src={image} alt='profile-pic' className='Profile-pic'/>
     <h2 className='User-name'>John Doe</h2>
    </div>
  )
}

export default ProfileHeader