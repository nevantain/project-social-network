<template>
<div class="login">
    <div class="login__window">
        <p>Login</p>
        <form class="form__login">
            <input-component class="input" v-model="usernameInput" :placeholder_text="'Enter username'" type="text" name="username"/>
            <input-component class="input" v-model="passwordInput" :placeholder_text="'Enter password'" type="password" name="password"/>
        </form>
        <div class="btns">
            <button-component @click="sendLoginData();">Login</button-component>
            <router-link class="rlink" to="/signin">Registration</router-link>
        </div>
    </div>
</div>
</template>
    
<script>
import axios from 'axios';
import InputComponent from './UI/InputComponent.vue';

export default {
    data() {
        return {
            usernameInput: "",
            passwordInput: ""
        };
    },
    methods: {
        update() {
            this.usernameInput = "";
            this.passwordInput = "";
        },
        async sendLoginData() {
            await axios.post("http://localhost:5000/api/login", {
                username: this.usernameInput,
                password: this.passwordInput
            }).then(res => {
                if (res.statusText === "OK") {
                    this.update();
                    this.$cookies.set("jwt", res.data.token);
                    this.$store.dispatch("loginVerify");
                }
                else {
                    this.update();
                }
            });
        }
    },
    mounted() {
        if (this.$store.state.isLogin === true) {
            this.$store.dispatch("loginVerify");
            this.$router.push(`/${this.$store.state.jwt_decode.username}`);
        }
    },
    components: { InputComponent }
}
</script>
    
<style scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login__window { 
    width: 300px;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    background-color: #59b4ff;
}

.btns {
    margin-top: 20px;
}
</style>