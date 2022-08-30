export interface IMenuType {
  path: string
  component: string
  name?: string
  alwaysShow?: boolean
  meta: {
    name: string
    icon?: string
    roles?: string[]
    parentId?: number
    [key: string]: any
  }
  children?: IMenuType[]
}
