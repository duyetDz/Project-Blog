<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <blog-item v-for="item in listBlogs" :key="item.id" :blog="item"/>
                <!-- Pager -->
                <div class="clearfix">
                    <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogItem from './BlogItem.vue';
import { mapState } from 'vuex';
export default {
    name: 'blog-list',
    computed:{
        ...mapState([
        'listBlogs'
        ])
    } ,
    components: {
        BlogItem
    }
}
</script>

<style></style>