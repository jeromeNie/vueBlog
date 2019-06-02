<template>
  <div class="register">
    <p class="title">Let's create a new account !</p>
    <input class="email" type="email" v-model="email" placeholder="Email">
    <br>
    <input class="pwd" type="password" v-model="password" placeholder="Password">
    <br>
    <button class="btn" @click="register">Register</button>
    <span class="text">
      or go back to
      <router-link to="/login">login</router-link>
    </span>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Your account has been created !");
            this.$router.push("/home");
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
.register {
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
  display: inline-block;
  height: 30px;
  line-height: 30px;
}
</style>

