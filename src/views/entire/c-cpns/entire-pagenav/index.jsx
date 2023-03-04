import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Pagination } from '@mui/material'
import { EntirePagenavWrapper } from './style'
import { useDispatch } from 'react-redux'
import { fetchEntireRoomsAction } from '@/store/modules/entire'

const EntirePagenav = memo((props) => {
  const { totalCount=0,currentPage=0 } = props
  const dispatch = useDispatch()
  const handleChange = (e,value) => {
    console.log('pageChange',value)
    dispatch(fetchEntireRoomsAction(value - 1))
  }
  return (
    <EntirePagenavWrapper>
      <div className="info">
        <Pagination count={totalCount} page={currentPage + 1} onChange={handleChange} />
        <div className="desc">第xx-xx个房源</div>
      </div>
    </EntirePagenavWrapper>
  )
})

EntirePagenav.propTypes = {
  totalCount:PropTypes.number,
  currentPage:PropTypes.number
}

export default EntirePagenav