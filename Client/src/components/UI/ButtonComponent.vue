<template>
    <button @click="click" type="text" class="input"><slot></slot></button>
</template>
        
<script>
export default {
    name: 'button-component',

    methods: {
        click() {
            console.log('btn is click');
        }
    }
}
</script>
        
<style scoped>

button {
    padding: 4px 10px 4px 10px;
    border: 0;
    margin: 0 5px 0 5px;
    border-radius: 10px;
    text-align: center;
    outline: none;
}
</style>