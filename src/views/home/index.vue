<!--
 * @Author: Vhen
 * @Date: 2020-12-08 18:18:34
 * @LastEditors: Vhen
 * @LastEditTime: 2020-12-08 18:28:35
 * @Description: 
-->
<template>
  <div class="home">
    <van-cell-group>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>

    <van-button type="primary" @click="$router.push('/test')">主要按钮</van-button>
    
    <div v-for="n in 60"> 4646</div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      value: ''
    };
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {},
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>