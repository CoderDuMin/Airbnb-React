import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongforWrapper } from './style'

const HomeLongfor = memo((props) => {
  const { longforInfo= {} } = props
  return (
    <HomeLongforWrapper>
      <SectionHeader title={longforInfo.title} subTitle={longforInfo.subtitle} />
      <ScrollView>
        {
          longforInfo?.list?.map(item => {
            return (
              <LongforItem key={item.id} itemData={item} />
            )
          })
        }
      </ScrollView>

    </HomeLongforWrapper>
  )
})

HomeLongfor.propTypes = {
  longforInfo:PropTypes.object
}

export default HomeLongfor