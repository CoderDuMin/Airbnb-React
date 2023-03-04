import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HomeSectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'

const HomeSectionV3 = memo(function(props) {
  const {plusInfo} = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={plusInfo?.title} subTitle={plusInfo?.subtitle} />
      {/* <SectionRooms roomList={plusInfo?.list} roomWidth='25%' /> */}
      <div className="room-list">
        <ScrollView >
          {
            plusInfo.list.map(item => {
              return (
                <RoomItem roomWidth='20%' itemData={item} key={item.id} />
              )
            })
          }
        </ScrollView>
      </div>
      <SectionFooter />
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  plusInfo:PropTypes.object
}

export default HomeSectionV3
