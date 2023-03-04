import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import PropTypes from 'prop-types'
import React, { memo,useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { EntireRoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const {roomList=[],isLoading=false,totalCount=0} = props
  const navgator = useNavigate()
  const dispatch = useDispatch()
  const navToDetail = useCallback((item) => {
      dispatch(changeDetailInfoAction(item))
      navgator('/detail')
    },[dispatch,navgator],)
  
  return (
    <EntireRoomsWrapper>
      <div className="title">{totalCount}多处住所</div>
      <div className="list">
      {
        !!roomList.length && roomList.map(room => {
          return (
            <RoomItem itemData={room} key={room._id} roomWidth='20%' itemClick={navToDetail} />
          )
        })
      }
      </div>
      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  )
})

EntireRooms.propTypes = {
  roomList:PropTypes.array,
  isLoading:PropTypes.bool,
  totalCount:PropTypes.number
}

export default EntireRooms