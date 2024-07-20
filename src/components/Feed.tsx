import React from 'react'
import Post from './Post'

export default function Feed() {
  return (
    <div className='flex flex-col items-start justify-start gap-2 bg-white rounded p-2 shadow-md'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
