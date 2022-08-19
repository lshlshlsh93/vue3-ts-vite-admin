import { Ref } from 'vue'
import useBoolean from './useBoolean'

type IFunType = () => void
type IReturnFunType = [Ref<boolean>, IFunType, IFunType]

/**
 * 加载中的hook方法
 * @param initValue 初始值 默认值为false
 * @returns 一个元组[值,设置为true,设置为false]
 */
export default function useLoading(initValue: boolean = false): IReturnFunType {
  const [loading, startLoading, endLoading] = useBoolean(initValue)
  return [loading, startLoading, endLoading] as IReturnFunType
}
