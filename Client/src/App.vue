<template>
<div class="wrapper">
  <head-bar></head-bar>
  <div class="main">
    <side-bar></side-bar>
    <div class="wrapper__content">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import SideBar from '@/components/SideBarComponent.vue';
import HeadBar from '@/components/HeadComponent.vue';
import jwt_decode from 'jwt-decode';


export default {
  name: 'App',
  components: {
    SideBar,
    HeadBar
  },

  updated() {
    try {
        this.$store.state.isLogin = true;
        this.$store.state.jwt_decode = jwt_decode(this.$store.state.jwt);
        this.$cookies.set('jwt_decode', this.$store.state.jwt_decode);
        this.$store.dispatch('loginVerify');
    } catch (e) {
      console.log(e);
    }
  },

  mounted() {
    try {
        this.$store.state.isLogin = true;
        this.$store.state.jwt_decode = jwt_decode(this.$store.state.jwt);
        this.$cookies.set('jwt_decode', this.$store.state.jwt_decode);
        this.$store.dispatch('loginVerify');
    } catch (e) {
      console.log(e);
      this.$store.state.isLogin = false;
      this.$store.state.jwt_decode = '';
      this.$store.state.jwt = '';
      this.$router.push('/');
    }
  },
}
</script>

<style>
:root {
  --main: #ffd382;
  --link-color: #91cfff;
  --profile-head-color: #ff9e7d;
  --profile-sub-head-color: #ffaf94;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Courier New', Courier, monospace;
}

a {
  text-decoration: none;
  color: black;
}

#app {
  width: 100%;
  min-height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  width: 70%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.wrapper__content {
  width: 80%;
  height: 100%;
  padding: 10px;
  margin-left: 5px;
  border-radius: 10px;
  background-color: var(--main);
}

.main {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
}

.sidebar {
  width: 20%;
  padding: 10px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: var(--main);
}

.link {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: var(--link-color);
  text-decoration: none;
  border-radius: 20px;
  padding: 5px 20px 5px 20px;
  margin: 5px;
}
</style>
