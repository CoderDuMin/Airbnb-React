import React, { memo ,useRef,useState} from 'react'
import PropTypes from 'prop-types'
import { RoomItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo(function RoomItem(props) {
  const { itemData,roomWidth } = props

  const sliderRef = useRef()
  const [selectedIndex,setSelectedIndex] = useState(0)
  const controlClickHandle = (isRight=true) => {
     // 上一个面板/下一个面板
     isRight ? sliderRef.current.next(): sliderRef.current.prev()

     // 最新的索引
     let newIndex = isRight ? selectedIndex + 1: selectedIndex - 1
     const length = itemData.picture_urls.length
     if (newIndex < 0) newIndex = length - 1
     if (newIndex > length - 1) newIndex = 0
     setSelectedIndex(newIndex)
  }

  const pictureElement = (
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
    )
  const sliderElement = (
    <div className="slider">
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={selectedIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot", { active: selectedIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )

  return (
    <RoomItemWrapper verifyColor={itemData?.verify_info?.text_color || '#39576a'} roomWidth={roomWidth}>
      <div className="inner">
        { !itemData.picture_urls ? pictureElement : sliderElement}
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
