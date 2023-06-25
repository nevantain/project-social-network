<template>
    <div class="post__card">
        <div class="post__card__title">{{ this.title }}</div>
        <div class="post__card__content">
            <span>{{ this.content }}</span>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'post-card',

    props: {
        title: String,
        content: String,
        post_id: Number,
        user_id: Number
    },

    data() {
        return {
            
        }
    }
}
</script>
    
<style scoped>
.post__card {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    padding: 20px;
    background-color: var(--profile-head-color);
    margin-bottom: 10px;
}

.post__card__title {
    width: 100%;
    height: 20%;
    font-size: 30px;
}

.post__card__content {
    width: 100%;
    height: 60%;
    padding: 20px;
    word-wrap: break-word;
    background-color: var(--profile-sub-head-color);
}

.post__card__rates {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
}

.r {
    width: 50px;
    margin: 5px;
}
</style>