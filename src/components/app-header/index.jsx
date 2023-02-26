import React, { memo } from 'react'
import HeadCenter from './c-cpns/head-center'
import HeadLeft from './c-cpns/head-left'
import HeadRight from './c-cpns/head-right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeadLeft />
      <HeadCenter />
      <HeadRight />
    </HeaderWrapper>
  )
})

export default AppHeader