<template>
  <el-cascader
    ref="areaInfoRef"
    separator="—"
    clearable
    :model-value="value"
    :options="_areaOptions"
    v-bind="props.otherOption"
    :props="_props"
    @change="handleChange"
  >
    <template #default="{ node, data }">
      <span>{{ data.label }}</span>
      <span v-if="!node.isLeaf">({{ data.children.length }})</span>
    </template>
  </el-cascader>
</template>
<script setup lang="ts">
import { ElCascader } from 'element-plus'
import 'element-plus/es/components/cascader/style/css'
import { areaList, IArea } from './data/areaList'

type _IArray = { label: string; value: string }[]
interface IProps {
  modelValue?: string | number | _IArray //  地区编号
  filterCity?: string | number // 这里可以传入要筛选的code或者名字，那么会自动筛选出对应的省市区
  otherOption?: any
}
const props = withDefaults(defineProps<IProps>(), {
  filterCity: '',
})
const areaInfoRef = ref<InstanceType<typeof ElCascader>>()

const value = computed(() => {
  if (Array.isArray(props.modelValue) && props.modelValue.length) {
    return props.modelValue[props.modelValue.length - 1].value
  }
  return props.modelValue
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: _IArray): void
  (event: 'change', value: _IArray): void
}>()

const handleChange = (event: any) => {
  const _r = _searchArea(event)
  emit('update:modelValue', _r)
  emit('change', _r)
}
//  通过值去搜索出对应的树形数据
const _searchArea = (codeArr: string[] | number[]) => {
  const _r = [] as _IArray
  if (codeArr) {
    let _target = areaList
    codeArr.forEach((v) => {
      const obj = _target.find((i) => i.value === v)
      if (obj) {
        _r.push({
          label: obj.label,
          value: obj.value,
        })
        _target = obj.children ?? []
      }
    })
  }
  return _r
}

const _props = computed(() => ({
  checkStrictly: true, // 严格检查
}))

// 选项
const _areaOptions = computed(() => {
  if (props.filterCity) {
    const _r = [...(_findToalTree(areaList, props.filterCity, []).value || [])]
    if (!_r.length) return areaList

    // 将父节点的children改为子节点，完成数据控制
    if (_r.length > 1) {
      for (let _i = 0; _i < _r.length - 1; _i++) {
        _r[_i].children = [_r[_i + 1]]
      }
    }
    return [_r[0]]
  }
  return areaList
})

/**
 * 当有筛选的地点时，对于所有数据进行一个中序遍历(树形广度优先遍历)
 * 获取这个地点的父节点和所有子节点
 * @author LSH
 */
const _findToalTree = (
  TreeArr: IArea[],
  key: string | number,
  parentArr: IArea[]
): {
  success: boolean
  value?: IArea[]
} => {
  const $i = TreeArr.findIndex((v) => v.label === key || v.value === key)
  if ($i >= 0) {
    // 找到了 直接返回和父节点所对应的数组出去
    return {
      success: true,
      value: [...parentArr, TreeArr[$i]],
    }
  } else {
    // 找不到，循环遍历后面的所有子节点
    for (let _i = 0; _i < TreeArr.length; _i++) {
      if (TreeArr[_i].children) {
        const _r = _findToalTree(TreeArr[_i].children as IArea[], key, [
          ...parentArr,
          TreeArr[_i],
        ])
        if (_r.success) {
          return _r
        }
      }
    }
    // 遍历完了,还是没有找到
    return {
      success: false,
    }
  }
}

// onMounted(() => {
//   if (props.modelValue && (typeof props.modelValue === 'string' || typeof props.modelValue === 'number')) {
//     const res = areaRef.value?.getCheckedNodes(false);
//     if (res) {
//       handleChange(res[0].pathValues);
//     }
//   }
// });
</script>
