import React, { memo,useEffect } from 'react'
import { useDispatch } from  'react-redux'
import { changeEntireTypeAction } from '@/store/modules/entire/actionCreator'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeEntireTypeAction(['类型1','类型2']))
  },[dispatch])
  return (
    <EntireWrapper>
      <div>searchbar</div>
      <div>filterlist</div>
      <div>roomslist</div>
    </EntireWrapper>
  )
})

export default Entire