<template>
  <div class="blog-header">
    <router-link class="btn btn-danger" to="/" exact>首页</router-link>
    <router-link class="btn btn-danger" to="/post" exact>写博客</router-link>
  </div>
</template>

<script>
export default {
  name: "blog-header"
};
</script>


<style scoped>
.blog-header {
  text-align: center;
  padding: 10px;
  background: #333;
}
a {
  margin-right: 10px;
}
.router-link-active {
  background: rgba(199, 22, 22, 0.8);
  color: #aaa;
}
</style>
