<template>
<input :value="modelValue" @focus="clickFunc" @input="updateInput" :placeholder="placeholder_text" type="text" class="input">
</template>
    
<script>
export default {
    name: 'input-component',
    props: {
        modelValue: [String, Number],
        placeholder_text: {type: String},
        clickFunc: Function
    },

    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>
    
<style scoped>
.input {
  width: 200px;
  height: 20px; 
  border: 0;
  border-radius: 5px;
  padding: 15px 20px 15px 20px;
  margin-top: 15px;
  outline: none;
}
</style>