<template>
  <div class="edit-blog card">
    <div v-if="!submmited">
      <h3>编辑博客</h3>

      <label for>标题：</label>
      <input type="text" v-model="blog.title">

      <label for>内容：</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkbox">
        <label for>vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories">
        <label for>node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories">
        <label for>react.js</label>
        <input type="checkbox" value="react.js" v-model="blog.categories">
        <label for>angular.js</label>
        <input type="checkbox" value="angular.js" v-model="blog.categories">
      </div>

      <label for>作者：</label>
      <select v-model="blog.authorName">
        <option v-for="(author,index) in authors" :key="index">{{author}}</option>
      </select>

      <button class="btn btn-danger" @click="post">发布</button>
    </div>
    <h3 v-if="submmited">编辑成功</h3>
  </div>
</template>

<script>
export default {
  name: "edit-blog",
  data: function() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["jerome", "jordan", "winters", "marlakey"],
      submmited: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .put(
          "https://do-myself-blog.firebaseio.com/blogs/" + this.id + ".json",
          this.blog
        )
        .then(response => {
          this.submmited = true;
        });
    }
  },
  created() {
    this.$http
      .get("https://do-myself-blog.firebaseio.com/blogs/" + this.id + ".json")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.blog = data;
      });
  }
};
</script>


<style scoped>
.edit-blog {
  max-width: 800px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #eee;
}
label {
  display: block;
  margin-top: 10px;
}
#checkbox label {
  display: inline-block;
  padding: 5px;
}
input[type="text"],
textarea,
select {
  width: 100%;
  padding: 5px;
}
textarea {
  height: 300px;
}
button {
  width: 80px;
  margin-top: 10px;
}
</style>
