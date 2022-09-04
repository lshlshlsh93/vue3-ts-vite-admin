<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item> <el-input placeholder="用户名" clearable /> </el-form-item>
      <el-form-item>
        <el-input placeholder="手机号" clearable />
      </el-form-item>
      <el-form-item> <el-button>查询</el-button> </el-form-item>
      <el-form-item> <el-button>新增</el-button> </el-form-item>
      <el-form-item> <el-button>删除</el-button> </el-form-item>
    </el-form>
    <el-table border style="width: 100%">
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column label="用户名"></el-table-column>
      <el-table-column label="姓名"></el-table-column>
      <el-table-column label="手机号"></el-table-column>
      <el-table-column label="邮箱"></el-table-column>
      <el-table-column label="所属部门"></el-table-column>
      <el-table-column label="状态"></el-table-column>
      <el-table-column label="创建时间"></el-table-column>
      <el-table-column>
        <template #default="scope">
          <el-button link type="primary">修改</el-button>
          <el-button link type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
