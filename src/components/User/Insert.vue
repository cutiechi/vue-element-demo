<template>
  <div class="insert-user">
    <el-row>
      <el-button @click="insertDialogVisible = true" type="primary">添加用户</el-button>
    </el-row>
    <el-dialog :visible.sync="insertDialogVisible" title="添加用户" width="400px">
      <el-form>
        <el-form-item>
          <el-input placeholder="用户密码" v-model="insertForm.userName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="用户名称" v-model="insertForm.userPassword"></el-input>
        </el-form-item>
        <el-button type="primary" @click="insert">添加</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  name: 'InsertUser',
  data () {
    return {
      insertDialogVisible: false,
      insertForm: {
        userName: '',
        userPassword: ''
      }
    }
  },
  methods: {
    insert () {
      this.$store.dispatch('insert', this.insertForm).then(() => {
        this.insertDialogVisible = false
        Message({
          message: '添加用户成功！',
          type: 'success'
        })
        this.insertForm.userName = ''
        this.insertForm.userPassword = ''
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  text-align: right;
}
</style>
