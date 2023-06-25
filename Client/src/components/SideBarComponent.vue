<template>
    <div class="sidebar">
        <div class="links">
            <router-link class="link" to="/home">Home</router-link>
            <router-link class="link" to="/news">News</router-link>
            <div class="link" @click="this.$store.dispatch('loginVerify');">Profile</div>
            <router-link class="link" to="/settings">Settings</router-link>
        </div>
    </div>
</template>
        
<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
        loginVerify() {
            this.$store.state.isLogin === false ? this.$router.push('/login') : this.$router.push(`/profile`);
        }
    }
}

</script>
        
<style scoped>
.link {
    margin-top: 10px;
}
</style>