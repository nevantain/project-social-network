<template>
<div class="head">
    <div class="logo">

    </div>

    <div class="search">

    </div>

    <div class="manage">
        <button-component class="logout" @click="this.$store.dispatch('logout');">logout</button-component>
    </div>
</div>
</template>
        
<script>
export default {
    data() {
        return {
           
        }
    }
}
</script>
        
<style scoped>
.head {
    width: 100%;
    height: 70px;
    border-radius: 10px;
    background-color: var(--main);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.logo {
    width: 20%;
}

.search {
    width: 60%;
}

.manage {
    width: 20%;
}

.logout {

}
</style>