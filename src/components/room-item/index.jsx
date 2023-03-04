import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { RoomItemWrapper } from './style'
import { Rating } from '@mui/material'

const RoomItem = memo(function RoomItem(props) {
  const { itemData,roomWidth } = props
  return (
    <RoomItemWrapper verifyColor={itemData?.verify_info?.text_color || '#39576a'} roomWidth={roomWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">
          {itemData.verify_info.messages?.join(' · ')}
        </div>
        <div className="name">
          {itemData.name}
        </div>
        <div className="price">
          ￥{itemData.price}/晚
        </div>
        <div className="bottom">
          <Rating name="half-rating-read" 
            defaultValue={itemData.star_rating ?? 5} 
            precision={0.1} 
            readOnly
            sx={{fontSize:'12px',color:'#008489'}} />
          <span className="count">{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info.content}</span>
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData:PropTypes.object,
  roomWidth:PropTypes.string
}

export default RoomItem
