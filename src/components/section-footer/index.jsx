import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionFotterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo(function SectionFooter(props) {
  const {name=''} = props
  let showName = '查看全部'
  if(name){
    showName = `查看更多${name}房源`
  }

  const navgator = useNavigate()
  const moreClickHandle = () => {
    navgator('/entire')
  }
  return (
    <SectionFotterWrapper color={name ? '#00848A' : '#000'} >
      <div className="info" onClick={moreClickHandle}>
        <span className='text'>{showName}</span>
        <IconMoreArrow/>
      </div>
    </SectionFotterWrapper>
  )
})

SectionFooter.propTypes = {
  name:PropTypes.string
}

export default SectionFooter
