<template>
<div class="sign">
    <div class="sign__window">
        <p>Registration</p>
        <form class="form__sign">
            <input-component :clickFunc="cancelErr" class="input" v-model="usernameInput" :placeholder_text="'Enter username'" type="text" name="username"/>
            <input-component :clickFunc="cancelErr" class="input" v-model="passwordInput" :placeholder_text="'Enter password'" type="password" name="password"/>
        </form>
        <div class="btns">
            <button-component @click="sendSignData();">Registration</button-component>
            <router-link class="rlink" to="/login">Login</router-link>
        </div>
        <div v-if="isUserAlreadyExits" class="error__UAE">
            <p>User Already Exits</p>
        </div>
        <div v-if="isUserNotCreated" class="error__UNC">
            <p>User Created Error</p>
        </div>
    </div>
</div>
</template>
    
<script>
import axios from 'axios';

export default {
    data () {
        return {
            usernameInput: '',
            passwordInput: '',
            isUserAlreadyExits: false,
            isUserNotCreated: false
        }
    },

    methods: {
        update () {
            this.usernameInput = '';
            this.passwordInput = '';
        },

        async sendSignData() {
            await axios.post('http://localhost:5000/api/sign', {
                username: this.usernameInput,
                password: this.passwordInput
            }).then(res => {
                if (res.statusText === 'OK') {
                    this.update();
                    this.$cookies.set('jwt', res.data.token);
                    this.$store.dispatch('loginVerify');
                } else {
                    this.update();
                }
            }).catch((error) => {
                if (error.response) {
                    if (error.response.data.message === 'user already exits') {
                        this.isUserAlreadyExits = true;
                    }
                } else {
                    console.log(error);
                }
            }).catch((error) => {
                if (error.response) {
                    if (error.response.data.message === 'user not created') {
                        this.isUserNotCreated = true;
                    }
                } else {
                    console.log(error);
                }
            });

        },

        cancelErr() {
            this.isUserAlreadyExits = false;
            const inputComp = document.querySelectorAll('input');
            inputComp.forEach((el) => {
                el.classList.remove('red__error');
            })
        }
    },

    watch: {
        isUserAlreadyExits() {
            const inputComp = document.querySelectorAll('input');
            inputComp.forEach((el) => {
                el.classList.add('red__error');
            })
        },

        isUserNotCreated() {
            const inputComp = document.querySelectorAll('input');
            inputComp.forEach((el) => {
                el.classList.add('red__error');
            })
        }
    }
}
</script>
    
<style scoped>
.sign {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign__window { 
    width: 300px;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    background-color: #59b4ff;
}

.btns {
    margin-top: 20px;
}

.error__UAE {
    margin-top: 10px;
    color: red;
}

.red__error {
    background-color: rgb(255, 133, 133);
}
</style>