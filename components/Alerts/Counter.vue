<template>
    <div class="acrylic py-4 text-center">
        <p class="font-semibold">{{ counter }} DAYS UNTIL LIVE SHOW</p>
    </div>
</template>

<script>
export default {
    props: {
        counter: 'Integer'
    }
}
</script>

<style scoped>
.acrylic {
    box-shadow: 0 1rem 2rem rgba(0,0,0,.3);
    
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    backdrop-filter: blur(10px) saturate(180%);
    background-color: rgba(255,255,255,.5);
}
</style>