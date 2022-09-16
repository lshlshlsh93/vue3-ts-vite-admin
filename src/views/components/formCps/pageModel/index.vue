<template>
  <el-card class="page-container" shadow="never">
    <!-- 筛选框、操作框 -->
    <IPageSearch
      :loading="startLoading"
      :title="true"
      :form-items="modelConfig.formItems"
      @init="beforeSearch"
      @search="beforeSearch"
    >
      <template #data>
        <div class="data-overview">
          <div class="item">
            <div class="value">
              <span>{{ total }}</span
              >家
            </div>
            <div class="label">美发分店</div>
          </div>
          <div class="item">
            <div class="value"><span>23</span>个地市</div>
            <div class="label">遍布范围</div>
          </div>
          <div class="item">
            <div class="value"><span>2365987</span>位</div>
            <div class="label">日接待人数</div>
          </div>
        </div>
      </template>
    </IPageSearch>
    <!-- 模型编辑 -->
    <IPageModel
      ref=""
      :model-config="modelConfig"
      :defaultData="formData"
      :loading="modalLoading"
      @edit="updatePageDataAction"
      @add="createPageDataAction"
    />
  </el-card>
</template>
<script setup lang="ts">
import { usePageModalAction, usePageSearch, usePageModal } from '@/hooks'
import { modelConfig } from './config'
import IPageSearch from '@/components/content/pageSearch/pageSearch.vue'
import IPageModel from '@/components/content/pageModel/pageModel.vue'
import { handleFormatArea, handleFormatTime } from '@/utils'

// 搜索
const {
  searchRef,
  startLoading,
  tableData,
  total,
  handleSearch,
  handlePageChange,
  searchParams,
} = usePageSearch({
  queryAction: '',
  model: IPageSearch,
})

const beforeSearch = (params: any) => {
  params = handleFormatTime(params)
  params = handleFormatArea(params)
  handleSearch(params)
}
// 新增、编辑按钮点击
const { handleCreate, handleUpdate, pageModalRef, formData } = usePageModal({
  modal: IPageModel,
  editFn: (data) => {
    if (data.district_code) {
      data.area = data.district_code
    } else if (data.city_code) {
      data.area = data.city_code
    } else if (data.province_code) {
      data.area = data.province_code
    } else {
      data.area = ''
    }
  },
})
const {
  createPageDataAction,
  updatePageDataAction,
  deletePageDataAction,
  modalLoading,
} = usePageModalAction({
  // createAction
})
</script>
<style lang="scss" scoped>
.page-container {
  background-color: #fff;
}
.data-overview {
  display: flex;
  padding: 10px 0;
  flex-wrap: wrap;
  align-items: center;
  .item {
    width: 25%;
    flex-shrink: 0;
    color: #999999;
    font-size: 12px;
    .value {
      color: #333333;
      font-weight: 600;
      margin-bottom: 4px;
      span {
        font-size: 20px;
      }
    }
  }
}
.shop-info {
  display: flex;
  .shop-image {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  .shop {
    font-size: 12px;
    color: #999999;
  }
  .name {
    height: 40px;
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
  }
}

:deep(.el-rate__icon) {
  margin: 0;
  margin-top: 10px;
}
</style>
