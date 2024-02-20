<template>
    <div class="not-found">
        <div class="page-not-found">
            <img src="https://mauwebsite.vn/wp-content/uploads/2021/10/loi-404.png" alt="404">
            <router-link class="btn btn-success" to="/">Go to Home</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: 'not-found',
    data() {
        return {
            
        }
    },
}
</script>

<style>
.page-not-found {
    display: flex;
    flex-direction: column;
    align-items: center; /* Để căn giữa theo chiều ngang */
    justify-content: center; /* Để căn giữa theo chiều dọc */
}

.page-not-found img {
    margin-bottom: 10px; /* Khoảng cách giữa ảnh và nút */
}

</style>