<script setup lang="ts">
import { ITableItem } from '@/interface'

interface IProps {
  tableItems: ITableItem[]
  tableConfig?: any
  tableCallback?: any
  tableData: any[]
}
const props = withDefaults(defineProps<IProps>(), {
  tableCallback: {},
})
</script>
<template>
  <el-table
    :data="props.tableData"
    style="width: 100%"
    v-bind="props.tableConfig"
    v-on="props.tableCallback"
  >
    <template>
      <el-table-column>
        <template>
          <slot> {{}} </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<style lang="scss" scoped></style>
