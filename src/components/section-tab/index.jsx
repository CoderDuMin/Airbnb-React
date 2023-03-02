import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SectionTabWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo(function SectionTabs(props) {
  const {tabs=[],name,tabClick} = props
  return (
    <SectionTabWrapper>
      <ScrollView>
        {
          tabs?.map(tab => {
            return (
              <div className={classNames('tab',name === tab ? 'active':'')} key={tab} onClick={() => tabClick(tab)}>{tab}</div>
            )
          })
        }
      </ScrollView>
    </SectionTabWrapper>
  )
})

SectionTabs.propTypes = {
  tabs:PropTypes.array,
  name:PropTypes.string,
  tabClick:PropTypes.func
}

export default SectionTabs
