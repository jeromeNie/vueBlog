<template>
  <div class="show-blog">
    <input type="text" placeholder="search blog" v-model="search">
    <div class="card" v-for="blog in blogsArray">
      <router-link class="card-header" :to="'/blog/'+blog.id" v-rainbow>{{blog.title}}</router-link>
      <p class="card-body">{{blog.content | filterText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blog",
  data: function() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("https://do-myself-blog.firebaseio.com/blogs.json")
      .then(data => {
        return data.json();
      })
      .then(data => {
        for (let key in data) {
          data[key].id = key;
          this.blogs.push(data[key]);
        }
      });
  },
  computed: {
    blogsArray: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  directives: {
    rainbow: function(el) {
      el.style.color =
        "#" +
        Math.random()
          .toString(16)
          .slice(2, 8);
    }
  },
  filters: {
    filterText: function(value) {
      return (value = value.slice(0, 50) + "...");
    }
  }
};
</script>


<style scoped>
* {
  margin-top: 10px;
}
.show-blog {
  max-width: 800px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #eee;
  border: 1px solid #ccc;
}
input {
  width: 100%;
  padding: 5px;
}
a {
  text-decoration: none;
}
</style>
