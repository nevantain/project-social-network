<template>
<div class="dialog" v-if="show===true" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
        <div class="dialog__head">
            <div class="dialog__head__text">{{ head_text }}</div>
            <div class="close__dialog" @click.stop="hideDialog">
                <img src="@/assets/close_svg.svg" draggable="false">
            </div>
        </div>
        <div class="dialog__main__content">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'profile-dialog-window',

    props: {
        show: {
            type: Boolean,
            default: false
        },

        head_text: String
    },

    methods: {
        hideDialog () {
            this.$emit('hideDialog');
        }
    }
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog__content {
    min-width: 20%;
    max-width: 40%;
    padding: 20px;
    background: var(--main);
    border-radius: 15px;
}

.dialog__main__content {
    margin-top: 20px;
}

.dialog__head {
    width: 100%;
    display: flex;
}

.dialog__head__text {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.close__dialog {
    
}
</style>