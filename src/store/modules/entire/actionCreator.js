import { CHANGE_ENTIRE_TYPE } from "./constants";

export const changeEntireTypeAction = (entireType) => ({
  type:CHANGE_ENTIRE_TYPE,
  entireType:entireType
})