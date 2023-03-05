import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import HeadCenter from './c-cpns/head-center'
import HeadLeft from './c-cpns/head-left'
import HeadRight from './c-cpns/head-right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  const { headerConfig={} } = useSelector(state => ({
    headerConfig:state.main.headerConfig
  }),shallowEqual)
  return (
    <HeaderWrapper className={headerConfig.isFixed ? 'fixed' :'' }>
      <HeadLeft />
      <HeadCenter />
      <HeadRight />
    </HeaderWrapper>
  )
})

export default AppHeader