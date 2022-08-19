/**
 * 后端接口返回的类型结构
 */
export interface BackendServiceResult<T = any> {
  /** 错误状态码 */
  code: number
  /** 接口数据 */
  data: T
  /** 接口消息 */
  message: string
}

/**
 * 请求服务的错误类型：
 * - axios: axios错误：网络错误, 请求超时, 默认的兜底错误
 * - http: 请求成功，响应的状态码非200的错误
 * - backend: 请求成功，响应的状态码为200，由后端定义的业务错误
 */
export type RequestServiceErrorType = 'axios' | 'http' | 'backend'

/** 请求服务的错误 */
export interface RequestServiceError {
  /** 请求服务的错误类型 */
  type: RequestServiceErrorType
  /** 错误码 */
  code: string | number
  /** 错误信息 */
  msg: string
}
