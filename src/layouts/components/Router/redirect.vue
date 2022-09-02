<script lang="ts">
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  created() {
    const { params, query } = useRoute()
    const { path } = params
    const router = useRouter()
    router
      .replace({ path: '/' + path, query })
      .then(() => {
        ElMessage.success({
          message: '刷新成功',
          duration: 1000,
        })
      })
      .catch((err) => {
        console.warn(err)
      })
  },
  render() {
    return h('div')
  },
})
</script>
