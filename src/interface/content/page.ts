/** 搜索组件类型 */
export interface ISearchConfig {
  formItems: IFormItem[]
}

/** 表格内容类型 */
export interface IPageTableContentConfig {
  tableItems: IFormItem[]
  tableConfig?: {
    showHeader?: boolean
    showFooter?: boolean
    options?: any
  }
}
/** 表格项类型 */
export interface ITableItem {
  label?: string // 表格标题
  prop: string // 字段
  type?: string // 类型
  useSlot?: boolean // 是否使用插槽
  [tableProp: string]: any
}

/** 表单项类型 */
export interface IFormItem {
  field: string // 字段
  type: IFormType // 类型
  label: string // 显示文本
  default?: any // 默认值
  hidden?: false // 是否隐藏
  rules?: any[] // 验证规则
  placeholder: string // 提示
  option?: any[] // 选择器选项
  otherOption?: any // 表单字段
}

/** 表单内容类型 */
export interface IPageFormContentConfig {
  formItems: IFormItem[]
  colLayout?: any
  labelWidth: string
}
/** 表单类型 */
type IFormType =
  | 'input'
  | 'password'
  | 'number'
  | 'select'
  | 'datepicker'
  | 'areapicker'
  | 'pageselect'
