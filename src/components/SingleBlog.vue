<template>
  <div class="single-blog">
    <div class="card">
      <h3 class="card-header">{{blog.title}}</h3>
      <div class="card-body">
        <p class="text">{{blog.content}}</p>
        <p>作者：{{blog.authorName}}</p>
        <ul>
          <span>分类：</span>
          <li v-for="(categoray,index) in blog.categories" :key="index">{{categoray}}</li>
        </ul>
      </div>
      <div class="btngroup">
        <button class="btn btn-danger" @click="editBlog">编辑</button>
        <button class="btn btn-danger" @click="deleteBlog">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data: function() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {
    deleteBlog: function() {
      this.$http
        .delete(
          "https://vueblog-734b2.firebaseio.com/blogs/" + this.id + ".json"
        )
        .then(response => {
          this.$router.push({ path: "/" });
        });
    },
    editBlog: function() {
      this.$router.push({ path: "/edit/" + this.id });
    }
  },
  created() {
    this.$http
      .get("https://vueblog-734b2.firebaseio.com/blogs/" + this.id + ".json")
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
.single-blog {
  max-width: 800px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #eee;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.text {
  background: #ddd;
  padding: 10px;
}
.btngroup {
  box-sizing: border-box;
  padding: 0 20px 10px 20px;
}
</style>
