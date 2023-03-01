import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { HomeSectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { useSelector } from 'react-redux'
import SectionTabs from '@/components/section-tab'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo(function(props) {
  const {homeInfo} = props
  console.log(homeInfo)
  const [tabName,setTabName] = useState(Object.keys(homeInfo.dest_list)[0])

  const handleTabClick = useCallback((name) => {
    setTabName(name)
  },[setTabName])
  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={homeInfo?.title} subTitle={homeInfo?.subtitle} />
      <SectionTabs tabs={Object.keys(homeInfo?.dest_list)} name={tabName} tabClick={handleTabClick} />
      <SectionRooms roomList={homeInfo?.dest_list[tabName]} roomWidth='33.33%' />
      <SectionFooter name={tabName} />
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  homeInfo:PropTypes.object
}

export default HomeSectionV2
