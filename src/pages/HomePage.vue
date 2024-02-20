<template>
    <div>
        <page-header title="Clean Blog"/>
        <blog-list />
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import BlogList from '../components/BlogList.vue';
export default {
    name: 'home-page',
    components: {
        PageHeader,
        BlogList
    }
}
</script>

<style></style>