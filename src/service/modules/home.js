import dmRequest from '../index'

export function getGoodPriceInfo(){
  return dmRequest.get({url:'/home/goodprice'})
}