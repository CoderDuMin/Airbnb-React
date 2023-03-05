import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DetailInfoWrapper } from './style'

const DetailInfo = memo((props) => {
  const {detailInfo} = props
  console.log('detailINfo',detailInfo)
  return (
    <DetailInfoWrapper>
      <img src={require('@/assets/img/info-cover.png')} alt="" />
    </DetailInfoWrapper>
  )
})

DetailInfo.propTypes = {
  detailInfo:PropTypes.object
}

export default DetailInfo