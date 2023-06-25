import { createStore } from 'vuex';
import router from '@/router/router.js';
import jwt_decode from 'jwt-decode';
import VueCookies from 'vue-cookies';

const store = createStore({
  state() {
    return {
      isLogin: false,
      jwt: VueCookies.get('jwt') ? VueCookies.get('jwt') : '',
      jwt_decode: {}
    }
  },
  actions: {
    loginVerify() {
      try {
        if (VueCookies.get('jwt')) {
          this.state.isLogin = true;
          this.state.jwt = VueCookies.get('jwt');
          this.state.jwt_decode = jwt_decode(this.state.jwt);
          VueCookies.set('jwt_decode', this.state.jwt_decode);
          router.push(`/${this.state.jwt_decode.username}`);
        } else {
          router.push('/login');
        }
      } catch (e) {
        console.log(e);
      }
    },

    logout () {
      try {
        this.state.isLogin = false;
        this.state.jwt = '';
        this.state.jwt_decode = {};
        VueCookies.remove('jwt');
        VueCookies.remove('jwt_decode');
        router.push('/login');
      } catch (e) {
        console.log(e);
      }
    }
  }
})

export default store;