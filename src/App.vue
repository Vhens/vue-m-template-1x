<template>
  <div id="app" class="app-container">
    <header class="app-header" v-if="meta.header">Header</header>
    <!-- <article class="app-article"> -->
      <main class="app-main">
        <keep-alive>
          <router-view v-if="meta.keepAlive"></router-view>
        </keep-alive>
           <router-view v-if="!meta.keepAlive"></router-view>
      </main>
    <!-- </article> -->
    <footer class="app-footer" v-if="meta.footer">Footer</footer>
  </div>
</template>

<script>
export default {
  computed: {
    meta() {
      return this.$route.meta
    }
  }
};
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  .app-header,
  .app-footer {
    height: 60px;
    border: 1px solid red;
  }
  // .app-article {
  //   flex: 1;
  //   // overflow-y: auto;
  //   display: flex;
  //   flex-direction: column;
  //   // height: 100vh;
  //   justify-content: space-between;
  
  // }
    .app-main {
      flex: 1;
      overflow-y: auto;
    }
}
</style>