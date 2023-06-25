<template>
<div class="new__post" @click="isConstructorShow=true">
    <span>New post</span>
    <img src="@/assets/add_svg.svg" alt="">
</div>

<profile-dialog-window v-if="isConstructorShow" :show="isConstructorShow" :head_text="'New post'" @hideDialog="isConstructorShow=false">
    <div class="title container">
        <span class="title__text ht">Title</span>
        <input-component v-model="title" :placeholder_text="'Ttile...'"></input-component>
    </div>
    <div class="content container">
        <span class="content__text ht">Content</span>
        <textarea v-model="content" placeholder="Content..." name="content__post" cols="30" rows="10"></textarea>
    </div>

    <div class="create__post__container">
        <button-component @click="createPost();">Create</button-component>
    </div>
</profile-dialog-window>
</template>
    
<script>
import axios from 'axios';
import ProfileDialogWindow from './UI/ProfileDialogWindow.vue';

export default {
    name: 'new-post',

    components: {
        ProfileDialogWindow
    },

    data () {
        return {
            isConstructorShow: false,
            title: '',
            content: ''
        }
    },

    methods: {
        async createPost() {
            await axios.post('http://localhost:4000/api/create', {
                title: this.title,
                content: this.content
            }, {
                headers: {
                    jwt: this.$store.state.jwt
                }
            }).then(res => {
                if (res.statusText === 'OK') {
                    this.isConstructorShow = false;
                    window.location.reload();
                }
            })
        }
    }
}
</script>
    
<style scoped>
.new__post {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--profile-sub-head-color);
    margin: 10px 0 10px 0;
    border-radius: 10px;
}

.ht {
    font-size: 20px;
    margin-top: 10px;
}

.container {
    display: flex;
    flex-direction: column;
}

textarea {
    outline: none;
    border-radius: 10px;
    margin-top: 10px;
    resize: none;
    padding: 10px;
}

.create__post__container {
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: end;
}
</style>