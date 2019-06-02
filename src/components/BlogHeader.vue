<template>
  <div class="blog-header">
    <router-link class="btn btn-danger" to="/home" exact>首页</router-link>
    <router-link class="btn btn-danger" to="/post" exact @click.native="confirm">写博客</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "blog-header",
  methods: {
    confirm() {
      if (!firebase.auth().currentUser) {
        alert("登录后才能发布博客！");
      }
    }
  }
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
