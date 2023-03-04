import React, { memo,useState } from 'react'
import classNames from 'classnames'
import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import { useDispatch } from 'react-redux'
import { fetchEntireRoomsAction } from '@/store/modules/entire'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])
  const dispatch = useDispatch()
  const itemClickHandle = (item) => {
    let index = selectItems.findIndex(ite => ite === item)
    if(index !== -1) {
      let newSelectItems = [...selectItems]
      newSelectItems.splice(index,1)
      setSelectItems(newSelectItems)
    }else{
      let newSelectItems = [...selectItems]
      newSelectItems.push(item)
      setSelectItems(newSelectItems)
    }
    dispatch(fetchEntireRoomsAction(0))
  }
  return (
    <EntireFilterWrapper>
       <div className="filter">
        {
          filterData.map((item) => {
            return (
              <div 
                className={classNames("item", { active: selectItems.includes(item) })} 
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})

export default EntireFilter