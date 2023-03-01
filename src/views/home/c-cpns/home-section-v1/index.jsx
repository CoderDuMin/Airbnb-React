import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo(function HomeSectionV1(props) {
  const {homeInfo={}} = props
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={homeInfo?.title} subTitle={homeInfo?.subtitle} />
      <SectionRooms roomList={homeInfo?.list} roomWidth='25%' />
      <SectionFooter />
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  roomInfo:PropTypes.object
}

export default HomeSectionV1
