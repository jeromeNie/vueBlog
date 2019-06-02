<template>
  <div class="show-blog">
    <input type="text" placeholder="search blog" v-model="search">
    <div class="card" v-for="(blog,index) in blogsArray" :key="index">
      <router-link class="card-header" :to="'/blog/'+blog.id" v-rainbow>{{blog.title}}</router-link>
      <p class="card-body">{{blog.content | filterText}}</p>
    </div>

    <router-link to="/login" class="login">登录</router-link>
    <router-link to="/register" class="register">注册</router-link>
    <a href class="logout" @click.prevent="logout">登出</a>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "show-blog",
  data: function() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {
    logout() {
      if (firebase.auth().currentUser) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            window.history.go(0);
          });
      }
      alert("您没有登录哦！");
    }
  },
  created() {
    this.$http
      .get("https://vueblog-734b2.firebaseio.com/blogs.json")
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
.login,
.register,
.logout {
  display: inline-block;
  width: 60px;
  height: 30px;
  background: crimson;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
}
</style>
