import React, { memo } from 'react'
import { SectionHeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title , subTitle} = props
  return (
    <SectionHeaderWrapper>
      <div className="title">{title}</div>
      <div className="sub-title">{subTitle}</div>
    </SectionHeaderWrapper>
  )
})

export default SectionHeader