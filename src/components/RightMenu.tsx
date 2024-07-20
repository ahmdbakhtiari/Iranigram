import React from 'react'
import FriendRequests from './FriendRequests'
import Birthday from './Birthday'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

export default function RightMenu({userId} : {userId? : string}) {
  return (
    <div>
      {userId? (<><UserInfoCard  userId = "test" /> <UserMediaCard userId = "test" /></>) : null }
      <FriendRequests/>
      <Birthday />
    </div>
  )
}
