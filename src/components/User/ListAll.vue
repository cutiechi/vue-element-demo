<template>
  <div class="list-all-user">
    <el-table stripe v-loading="loading" :data="users">
      <el-table-column prop="userId" label="用户 ID"></el-table-column>
      <el-table-column prop="userName" label="用户名称"></el-table-column>
      <el-table-column prop="userPassword" label="用户密码"></el-table-column>
      <el-table-column align="right" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="visibleUpdateDialog(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="deleteById(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改用户" :visible.sync="updateDialogVisible" width="400px">
      <el-form label-position="top" label-width="200px">
        <el-form-item label="用户 ID">
          <el-input disabled v-model="updateForm.userId"></el-input>
        </el-form-item>
        <el-form-item label="用户名称">
          <el-input v-model="updateForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
          <el-input v-model="updateForm.userPassword"></el-input>
        </el-form-item>
        <el-button type="primary" @click="update">修改</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { MessageBox, Message } from 'element-ui'

export default {
  name: 'ListAll',
  data () {
    return {
      loading: true,
      updateDialogVisible: false,
      updateForm: {
        userId: '',
        userName: '',
        userPassword: ''
      }
    }
  },
  methods: {
    listAll () {
      this.$store.dispatch('listAll').then(() => {
        this.loading = false
      })
    },
    visibleUpdateDialog ({ userId, userName, userPassword }) {
      this.updateDialogVisible = true
      this.updateForm = {
        userId,
        userName,
        userPassword
      }
    },
    update () {
      this.$store.dispatch('update', this.updateForm).then(() => {
        Message({
          message: '修改用户成功！',
          type: 'success'
        })
        this.updateDialogVisible = false
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    deleteById ({ userId }) {
      MessageBox.confirm(
        '此操作将永久删除该用户, 是否继续?',
        '提示',
        {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        this.$store.dispatch('deleteById', userId).then(() => {
          Message({
            message: '删除用户成功！',
            type: 'success'
          })
        }).catch(message => {
          Message({
            message,
            type: 'error'
          })
        })
      }).catch(() => {})
    }
  },
  computed: {
    ...mapState({
      users: state => state.user.users
    })
  },
  mounted () {
    this.listAll()
  }
}
</script>
