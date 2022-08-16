import { RouteComponent } from 'vue-router'
export interface IRouterData {
  id: string
  code: string
  url: string
  name: string
  level: string
  parent_id: string
  [key: string]: any
}
export interface IRouteType {
  name: string
  path: string
  redirect?: string
  hidden?: string
  component?: RouteComponent
  meta?: IRouterData
  children?: any
}
