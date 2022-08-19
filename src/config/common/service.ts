/**
 * 请求超时时间
 */
export const REQUEST_TIMEOUT: number = 60 * 1000

/**
 * 错误信息的显示时间
 */
export const ERROR_MESSAGE_DURATION: number = 3 * 1000

/**
 * 兜底的请求错误code
 */
export const DEFAULT_REQUEST_ERROR_CODE: string = 'DEFAULT'
/**
 * 兜底的请求错误文本
 */
export const DEFAULT_REQUEST_ERROR_MESSAGE: string = '请求错误~'

/**
 * 请求超时的错误code(为固定值：ECONNABORTED)
 */
export const REQUEST_TIMEOUT_CODE: string = 'ECONNABORTED'
/**
 *请求超时的错误文本
 */
export const REQUEST_TIMEOUT_MESSAGE: string = '请求超时~'

/**
 * 网络不可用的code
 */
export const NETWORK_ERROR_CODE: string = 'NETWORK_ERROR'
/**
 * 网络不可用的错误文本
 */
export const NETWORK_ERROR_MESSAGE: string = '网络不可用~'

/**
 * 请求不成功各种状态的错误
 */
export const ERROR_STATUS = {
  400: '400: 请求出现语法错误~' || '400: The request has a syntax error',
  401: '401: 用户未授权~' || '401: User is not authorized',
  403:
    '403: 登录凭证已过期，请重新访问~' ||
    '403: User unauthorized login credentials have expired. Please try again',
  404: '404: 请求的资源不存在~' || '404: The requested resource does not exist',
  405: '405: 请求方法未允许~' || '405: Request method not allowed',
  408: '408: 网络请求超时~' || '408: Network request timeout',
  500: '500: 服务器内部错误~' || '500: Server internal error',
  501:
    '501: 服务器未实现请求功能~' ||
    '501: The server does not implement the request function',
  502: '502: 错误网关~' || '502: Bad gateway',
  503: '503: 服务不可用~' || '503: Service unavailable',
  504: '504: 网关超时~' || '504: Gateway timeout',
  505:
    '505: http版本不支持该请求~' ||
    '505: The HTTP version does not support this request',
}

/**
 * 不弹出错误信息的code
 */
export const NO_ERROR_MESSAGE_CODE: (string | number)[] = []
