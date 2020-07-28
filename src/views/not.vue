<template>
    <div class="not">
        <Not></Not>
    </div>
</template>

<script>
import Not from '../components/Not/index.vue';
export default {
    components:{
        Not
    }
}
</script>

<style scoped>
.not{
     width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
</style>