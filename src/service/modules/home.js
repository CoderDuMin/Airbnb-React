import dmRequest from '../index'

export function getGoodPriceInfo(){
  return dmRequest.get({url:'/home/goodprice'})
}

export function getHighScoreInfo(){
  return dmRequest.get({url:'/home/highscore'})
}

export function getDiscountInfo(){
  return dmRequest.get({url:'/home/discount'})
}

export function getRecommendInfo(){
  return dmRequest.get({url:'/home/hotrecommenddest'})
}