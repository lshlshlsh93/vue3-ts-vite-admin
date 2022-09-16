export interface IUserInfo {
  user: IUser
  /** 用户token */
  token: string
}
export interface IUser {
  id: string
  /** 用户名 */
  username: string
  /** 邮箱 */
  email: string
  /** 头像 */
  avatar: string
  /** 是否是管理员 */
  isAdmin?: boolean
  [key: string]: any
}
