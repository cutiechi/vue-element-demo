<template>
  <div id="user">
    <el-card>
      <insert></insert>
      <list-all></list-all>
    </el-card>
  </div>
</template>

<script>
import ListAll from '../components/User/ListAll'
import Insert from '../components/User/Insert'

export default {
  components: {
    ListAll,
    Insert
  }
}
</script>
