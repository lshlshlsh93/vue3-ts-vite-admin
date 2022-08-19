import { Ref } from 'vue'

type IFunType = () => void
type IReturnFunType = [Ref<boolean>, IFunType, IFunType, IFunType]

/**
 * boolean类型的hook函数
 * @param initValue 初始值 默认为false
 * @returns 返回一个元组 [值,设置为true,设置为false,取反]
 */
export default function useBoolean(initValue: boolean = false): IReturnFunType {
  const bool = ref(initValue)
  function setTrue() {
    bool.value = true
  }
  function setFalse() {
    bool.value = false
  }
  function toggle() {
    bool.value = !bool.value
  }
  return [bool, setTrue, setFalse, toggle] as IReturnFunType
}
