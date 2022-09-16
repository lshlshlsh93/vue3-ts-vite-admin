<template>
  <el-dialog v-model="isVisable" title="修改头像" width="600px">
    <div class="cropper-wrapper">
      <div class="cropper-wrapper-left">
        <img :src="img" alt="" />
      </div>
      <div class="cropper-wrapper-right">
        <div class="cropper-wrapper-right-title"></div>
        <div class="cropper-wrapper-right-item">
          <div class="cropper-wrapper-right-value">
            <div class="img-preview preview-lg" />
          </div>
          <div class="cropper-wrapper-right-label">100 x 100</div>
        </div>
        <div class="cropper-wrapper-right-item">
          <div class="cropper-wrapper-right-value">
            <div class="img-preview preview-md" />
          </div>
          <div class="cropper-wrapper-right-label">50 x 50</div>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isVisable = false"></el-button>
        <el-button type="primary" @click="handleUpload">上传 </el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </span>
      <input
        type="file"
        ref="fileRef"
        style="display: none"
        accept="image/*"
        @click="handleFileChange"
      />
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

const isVisable = ref<boolean>(false)
const imgRef = ref()
const fileRef = ref()
const img = ref('')

const cropper = ref<any>(null)

const handleDialogOpen = (cropperImg: any) => {
  img.value = cropperImg
  isVisable.value = true
  nextTick(() => {
    initCropper()
  })
}

const initCropper = () => {
  cropper.value = new Cropper(imgRef.value, {
    viewMode: 1,
    dragMode: 'none',
    initialAspectRatio: 1,
    background: false,
    autoCropArea: 0.6,
    aspectRatio: 1,
    preview: '.img-preview',
  })
}
const handleFileChange = (e: any) => {
  const file = e.target.files[0]
  const url = window.URL || window.webkitURL
  cropper.value.replace(url.createObjectURL(file))
}
const handleUpload = () => {
  fileRef.value.click()
}
const handleSubmit = () => {
  const base64 = cropper.value.getCroppedCanvas().toDataURL('image/jpeg')
  console.log(base64)
}
defineExpose({
  handleDialogOpen,
})
</script>
<style lang="scss" scoped>
.img-preview {
  overflow: hidden;
  border-radius: var(--el-border-radius-circle);
  margin: auto;
}

.img-preview > img {
  max-width: 100%;
}

.preview-lg {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.preview-md {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.cropper-wrapper {
  display: flex;
  .cropper-wrapper-left {
    position: relative;
    display: inline-block;
    height: 350px;
    flex: 1;
    border: 1px solid var(--el-border-color);
    background: var(--el-color-white);
    overflow: hidden;
    background-repeat: no-repeat;
    cursor: move;
    border-radius: var(--el-border-radius-base);
    #avatar-cropper {
      width: 100%;
      height: 100%;
    }
  }
  .cropper-wrapper-right {
    width: 150px;
    height: 350px;
    .cropper-wrapper-right-title {
      text-align: center;
      height: 20px;
      line-height: 20px;
    }
    .cropper-wrapper-right-item {
      margin: 15px 0;
      .cropper-wrapper-right-label {
        text-align: center;
        font-size: 12px;
        color: var(--el-text-color-primary);
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
