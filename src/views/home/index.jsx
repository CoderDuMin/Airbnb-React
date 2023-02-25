import { changeRoomsAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Home = memo(() => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeRoomsAction(Array(100).fill('房屋列1')))
  },[dispatch])
  return (
    <div>
      <h2>Home</h2>
      <a href="/detail">好好好</a>
    </div>
  )
})

export default Home