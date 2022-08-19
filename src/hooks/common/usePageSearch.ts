import useLoading from './useLoading'
import { BackendServiceResult } from '../../interface'

/** 回调行为 */
type ICallBackAction = (item?: any) => Promise<BackendServiceResult<any>>

/** 模型参数 */
type IModelParam = {
  queryAction: ICallBackAction
  model?: any
}
interface ISearchParam {
  page: number
  size: number
  [key: string]: any
}

interface IPageInfo {
  page?: number
  size?: number
}

/**
 * 分页查询的hook方法
 * @param option 选项
 */
export function usePageSearch(option: IModelParam) {
  /** 表格数据 */
  const tableData = ref<any[]>([])

  /** 总页数 */
  const total = ref<number>(0)

  const [loading, startLoading, endLoading] = useLoading(false)

  /** 搜索数据 */
  const searchRef = option.model
    ? ref<InstanceType<typeof option.model>>()
    : ref()
  /** 查询携带参数  第几页每页大小 */
  const searchParams = ref<ISearchParam>({
    page: 1,
    size: 10,
  })

  /**
   * 查询数据行为
   * @param searchParams 搜索携带参数
   * @returns
   */
  const queryDataAction = async (searchParams: any = {}): Promise<any> => {
    try {
      startLoading()
      const { data: result } = await option.queryAction(searchParams)
      // 此处result中records的是提前跟后端协调好返回的数据字段名
      tableData.value = result.records
      total.value = result.total
      return result
    } catch (error) {
    } finally {
      endLoading()
    }
  }

  /**
   * 搜索的回调
   * @param e 参数
   */
  const handleSearch = (e: any = {}): void => {
    searchParams.value = {
      page: searchParams.value.page,
      size: searchParams.value.size,
      ...e,
    }
    queryDataAction(searchParams.value)
  }

  const handlePageChange = (pageInfo: IPageInfo) => {
    if (pageInfo.page) {
      searchParams.value.page = pageInfo.page
    }
    if (pageInfo.size) {
      searchParams.value.size = pageInfo.size
    }
    queryDataAction(searchParams.value)
  }

  return {
    startLoading: loading,
    tableData,
    total,
    searchParams,
    searchRef,
    handleSearch,
    handlePageChange,
    queryDataAction,
  }
}
