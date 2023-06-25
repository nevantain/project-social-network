<template>
<div class="profile__news">
    <div v-for="post in posts" :key="post.id" class="post__list">
        <post-card :title="post.title" :content="post.content" :post_id="post.id" :user_id="post.user_id" :likes="likes"></post-card>
    </div>
</div>
</template>
    
<script>
import PostCard from './PostCard.vue';
import axios from 'axios';

export default {
    name: 'profile-news',

    components: {
        PostCard
    },

    data() {
        return {
            posts: null,
            likes: null
        }
    },

    async mounted () {
        const { data } = await axios.post('http://localhost:4000/api/posts_of_user', {
             user_id: this.$store.state.jwt_decode.id
        },  {
            headers: {
                jwt: this.$store.state.jwt
            }
        });
        this.posts = data;
    }
}
</script>
    
<style scoped></style>