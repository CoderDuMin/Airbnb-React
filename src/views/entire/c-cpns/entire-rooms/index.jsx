import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EntireRoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const {roomList=[],isLoading=false,totalCount=0} = props
  
  return (
    <EntireRoomsWrapper>
      <div className="title">{totalCount}多处住所</div>
      <div className="list">
      {
        !!roomList.length && roomList.map(room => {
          return (
            <RoomItem itemData={room} key={room._id} roomWidth='20%' />
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