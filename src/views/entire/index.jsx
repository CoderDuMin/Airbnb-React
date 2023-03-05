import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from  'react-redux'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagenav from './c-cpns/entire-pagenav'
import { fetchEntireRoomsAction } from '@/store/modules/entire'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  const {totalCount=0,roomList=[],isLoading=false,currentPage=0} = useSelector((state)=>({
    totalCount:state.entire.totalCount,
    roomList:state.entire.roomList,
    isLoading:state.entire.isLoading,
    currentPage:state.entire.currentPage
  }),shallowEqual)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeHeaderConfigAction({isFixed:true}))
    dispatch(fetchEntireRoomsAction(0))
  },[dispatch])
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms roomList={roomList} isLoading={isLoading} totalCount={totalCount} />
      <EntirePagenav totalCount={totalCount} currentPage={currentPage} />
    </EntireWrapper>
  )
})

export default Entire