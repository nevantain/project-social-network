<template>
    <div class="profile">
        <div class="avatar">
            <div class="avatar__container">
                <img class="avatar__img" src="../assets/test.jpg" alt="">
            </div>
        </div>

        <div class="user__info">
            <div class="username">
                <span>{{ this.$store.state.jwt_decode.username }}</span>
            </div>
    
            <div class="profile__info">
                <div class="profile__describe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim
                    nesciunt rerum saepe, quae suscipit voluptatem.</div>
    
                <div v-if="closeMoreInfo" class="more__info" @click="moreInfo">More info...</div>
    
                <profile-dialog-window @hideDialog="isMoreInfo = false" :show="isMoreInfo" :head_text="'Additional Info'"
                    class="profile__more__info">
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                        laudantium adipisci sapiente repellendus labore, dolor, illo aspernatur aliquid obcaecati sint odio
                        voluptates expedita at dolore ut?</span>
                </profile-dialog-window>
            </div>
        </div>
    </div>
</template>
    
<script>
import ProfileDialogWindow from './UI/ProfileDialogWindow.vue';

export default {
    name: "header-profile",

    components: {
        ProfileDialogWindow
    },

    data() {
        return {
            isMoreInfo: false
        };
    },
    methods: {
        moreInfo() {
            this.isMoreInfo = true;
        },
        closeMoreInfo() {
            this.isMoreInfo = false;
        }
    }
}
</script>
    
<style scoped>
.profile {
    height: 30vh;
    border-radius: 10px;
    background-color: var(--profile-head-color);
    display: flex;
    padding: 10px 40px 10px 40px;
    align-items: center;
    justify-content: space-between;
}

.avatar {
    width: 20%;
    margin-right: 10px;
}

.avatar__container {
    width: 200px;
    height: 200px;
}

.avatar__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.user__info {
    width: 75%;
    margin-left: 10px;
}

.username {
    font-size: 40px;
}

.more__info {
    color: blue;
    cursor: pointer;
}

.close__more__info {
    color: blue;
    cursor: pointer;
}
</style>