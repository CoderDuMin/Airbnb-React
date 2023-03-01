import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { RoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo(function SectionRooms(props) {
  const {roomList=[],roomWidth="25%"} = props
  return (
    <RoomsWrapper roomWidth={roomWidth}>
      {
        roomList?.slice(0,8).map(item => {
        return (
          <RoomItem itemData={item} key={item.id} roomWidth={roomWidth} />
        )
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList:PropTypes.array
}

export default SectionRooms
