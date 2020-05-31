<template>
    <div class="home">
            <weatherWidget />
<!--            <bubblesWidget />-->

    </div>
</template>

<script>
    import weatherWidget from '@/components/weatherWidget.vue';
    import bubblesWidget from '@/components/bubblesWidget.vue';

    export default {
        name: "home",
        components: {
            weatherWidget,
            bubblesWidget
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #577dbd;
    }
</style>
