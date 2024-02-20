<template>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
            <router-link class="navbar-brand" to="/" tag="nav">Start Bootstrap</router-link>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <router-link
                        v-for="link in listLink"
                        v-bind:key="link.to"
                        v-bind:to="link.to"
                        tag="li"
                        activeClass=""
                        v-bind:exactActiveClass="link.activeClass"
                        class="nav-item"
                    >
                    <a>{{ link.text }}</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'comp-navigation',
    data() {
        return {
            listLink: [
                {to:'/', text: 'name',activeClass:"active"},
                {to:'/about-us', text: 'About',activeClass:"active"},
                {to:'/contact', text: 'Contact',activeClass:"active"},
                {to:'/Login', text: 'Login',activeClass:"active"},
            ]
        }
    }
}
</script>

<style></style>
