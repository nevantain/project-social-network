<template>
<div class="profile__page">
    <header-profile></header-profile>
    <new-post></new-post>
    <profile-news></profile-news>
</div>
</template>
    
<script>
import HeaderProfile from '../HeaderProfile.vue';
import ProfileNews from '../ProfileNews.vue';
import NewPost from '../NewPost.vue';

export default {
    name: 'App',

    components: {
        HeaderProfile,
        ProfileNews,
        NewPost
    },

    data() {
        return {
            isMoreInfo: false
        }
    },

    methods: {
        moreInfo () {
            this.isMoreInfo = true;
        },

        closeMoreInfo () {
            this.isMoreInfo = false;
        }
    }
}
</script>
    
<style scoped>
.header__profile {
    height: 40vh;
    margin: 10px;
    border-radius: 10px;
}

.profile__main__info {
    width: 100%;
    height: 60%;
    display: flex;
    padding: 10px;
    position: relative;
    justify-content: space-around;
    align-items: center;
    background-color: var(--profile-head-color);
}

.edit__profile {
    position: absolute;
    top: 20px;
    right: 20px;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.avatar__img {
    width: 100%;
    height: 100%;
    object-fit: none;
}

.main__info {
    width: 60%;
}

.profile__info {
    margin-top: 10px;
}

.profile {
    border-radius: 10px;
}

.profile__name {
    font-size: 30px;
}

.main__img__container {
    height: 40%;
}

.main__img {
    width: 100%
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