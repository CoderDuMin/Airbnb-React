import dmRequest from '../index'

export function getEntireRoomList(offset,size){
  return dmRequest.get({
    url:'/entire/list',
    params:{
      offset,
      size
    }
  })
}