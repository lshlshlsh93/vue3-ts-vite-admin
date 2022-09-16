import PageModelComponent from '@/components/content/pageModel/pageModel.vue'
type CallbackFn = (item?: any) => void
type IModalParam = {
  createFn?: CallbackFn
  editFn?: CallbackFn
  modal?: any
  defaultData?: object
}

/**
 * 公用创建，编辑的逻辑
 * @param createFn 创建模态框打开回调
 * @param editFn 编辑模态框打开回调
 * @returns
 */
export function usePageModal(option: IModalParam = {}) {
  if (!option.modal) {
    option.modal = PageModelComponent
  }

  const pageModalRef = ref<InstanceType<typeof option.modal>>()

  const formData: any = ref({})

  const handleCreate = () => {
    if (pageModalRef.value) {
      formData.value = {}

      // 设置默认值
      if (option.defaultData) {
        formData.value = { ...option.defaultData }
      }

      pageModalRef.value.dialogVisible = true
    }
    option.createFn && option.createFn()
  }

  const handleUpdate = (data: any) => {
    if (pageModalRef.value) {
      formData.value = data
      pageModalRef.value.dialogVisible = true
    }
    option.editFn && option.editFn(data)
  }

  return {
    handleCreate,
    handleUpdate,
    pageModalRef,
    formData,
  }
}

import { ElMessage } from 'element-plus'
import { BackendServiceResult } from '@/interface'
import useLoading from './useLoading'
import { Ref } from 'vue'
type CallbackAction = (item?: any) => Promise<BackendServiceResult<any>>
type IModalActionParam = {
  createAction?: CallbackAction
  editAction?: CallbackAction
  deleteAction?: CallbackAction
  callback?: CallbackFn
  pageModalRef?: Ref<any>
}

/**
 * 表格数据变更的hook
 * @param createAction 创建数据的api函数
 * @param editAction 编辑数据的api函数
 * @param deleteAction 删除数据的api函数
 * @param deleteAction 数据完成修改后的回调函数
 */
export function usePageModalAction(option: IModalActionParam = {}) {
  let createPageDataAction
  let updatePageDataAction
  let deletePageDataAction
  const [loading, startLoading, endLoading] = useLoading(false)
  if (option.createAction) {
    // 新增
    createPageDataAction = async (data: any) => {
      try {
        startLoading()
        const res = await option.createAction!(data)
        ElMessage.success('创建成功')
        if (option.pageModalRef && option.pageModalRef.value) {
          option.pageModalRef.value.dialogVisible = false
        }
        option.callback && option.callback()
        return res
      } catch (error) {
        console.log(error)
      } finally {
        endLoading()
      }
    }
  }

  if (option.editAction) {
    // 编辑
    updatePageDataAction = async (data: any) => {
      try {
        startLoading()
        const res = await option.editAction!(data)
        ElMessage.success('修改成功')
        if (option.pageModalRef && option.pageModalRef.value) {
          option.pageModalRef.value.dialogVisible = false
        }
        option.callback && option.callback()
        return res.data
      } catch (error) {
        console.log(error)
      } finally {
        endLoading()
      }
    }
  }

  if (option.deleteAction) {
    // 删除
    deletePageDataAction = async (data: any) => {
      try {
        startLoading()
        const res = await option.deleteAction!(data)
        ElMessage.success('删除成功')
        option.callback && option.callback()
        return res?.data
      } catch (error) {
        console.log(error)
      } finally {
        endLoading()
      }
    }
  }

  const nullFoo = () => {}

  return {
    createPageDataAction: createPageDataAction || nullFoo,
    updatePageDataAction: updatePageDataAction || nullFoo,
    deletePageDataAction: deletePageDataAction || nullFoo,
    modalLoading: loading,
  }
}
