<template>
<div class="news">
    <div v-for="post in posts" :key="post.id" class="post__list">
        <post-card :title="post.title" :content="post.content" :post_id="post.id" :user_id="post.user_id"></post-card>
    </div>
</div>
</template>
            
<script>
import axios from 'axios';
import PostCard from '../PostCard.vue';

export default {
    components: {
        PostCard
    },

    data() {
        return {
            posts: null
        }
    },

    async mounted () {
        const { data } = await axios.get('http://localhost:4000/api/posts',  {
            headers: {
                jwt: this.$store.state.jwt
            }
        });
        
        this.posts = data;
    }
}
</script>
            
<style scoped></style>