import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SectionTabWrapper } from './style'

const SectionTabs = memo(function SectionTabs(props) {
  const {tabs=[],name,tabClick} = props
  return (
    <SectionTabWrapper>
      {
        tabs?.map(tab => {
          return (
            <div className={classNames('tab',name == tab ? 'active':'')} key={tab} onClick={() => tabClick(tab)}>{tab}</div>
          )
        })
      }
    </SectionTabWrapper>
  )
})

SectionTabs.propTypes = {
  tabs:PropTypes.array,
  name:PropTypes.string,
  tabClick:PropTypes.func
}

export default SectionTabs
