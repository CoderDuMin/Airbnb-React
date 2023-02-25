import React, { memo,useEffect } from 'react'
import { useDispatch } from  'react-redux'
import { changeEntireTypeAction } from '@/store/modules/entire/actionCreator'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeEntireTypeAction(['类型1','类型2']))
  },[dispatch])
  return (
    <div>Entire</div>
  )
})

export default Entire