import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import type { RequestServiceError } from '@/interface'
import { NO_ERROR_MESSAGE_CODE, ERROR_MESSAGE_DURATION } from '@/config'

/** 错误消息栈，防止同一错误同时出现 */
const errorMsgStack = new Map<string | number, string>([])

function addErrorMsg(error: RequestServiceError) {
  errorMsgStack.set(error.code, error.msg)
}
function removeErrorMsg(error: RequestServiceError) {
  errorMsgStack.delete(error.code)
}
function hasErrorMsg(error: RequestServiceError) {
  return errorMsgStack.has(error.code)
}

/**
 * 显示错误信息
 * @param error
 */
export function showErrorMsg(error: RequestServiceError) {
  if (!NO_ERROR_MESSAGE_CODE.includes(error.code)) {
    if (!hasErrorMsg(error)) {
      addErrorMsg(error)
      if (error.msg) {
        ElMessage.error(error.msg)
      }
      setTimeout(() => {
        removeErrorMsg(error)
      }, ERROR_MESSAGE_DURATION)
    }
  }
}
