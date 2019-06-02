<template>
  <div class="login">
    <h3 class="title">Sign In</h3>
    <input class="email" type="email" v-model="email" placeholder="Email">
    <br>
    <input class="pwd" type="password" v-model="password" placeholder="Password">
    <br>
    <button class="btn" @click="login">Connection</button>
    <p class="text">
      You don't have an account? You can
      <router-link to="/register">create one</router-link>
    </p>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Well done ! You are now connected");
            this.$router.push("/");
          },
          err => {
            alert("Oops." + err.message);
          }
        );
    }
  }
};
</script>
<style scoped>
.login {
  width: 60%;
  height: 100vh;
  padding-top: 30vh;
  text-align: center;
  background: #999;
  margin: 0 auto;
}
.title {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 500;
}
.email {
  border-style: outset;
  width: 20rem;
  padding: 10px;
  border: 1px solid rgba(7, 17, 27, 0.4);
}
.pwd {
  margin: 30px 0 20px;
  border-style: outset;
  width: 20rem;
  padding: 10px;
  border: 1px solid rgba(7, 17, 27, 0.4);
}
.btn {
  display: inline-block;
  height: 40px;
  background: crimson;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
}
.text {
  height: 30px;
  line-height: 30px;
}
</style>


