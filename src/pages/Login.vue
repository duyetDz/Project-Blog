<template>
    <div>
        <page-header bg="dist/img/contact-bg.jpg" title="Login Page" subHeading="Have questions? I have answers."/>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <form name="sentMessage" v-if="!isLogin">
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls">
                                <label>Email Address</label>
                                <input v-model="email" type="email" class="form-control" placeholder="Email Address" id="email" >
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Password</label>
                                <input v-model="password" type="password" class="form-control" placeholder="PassWord">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <br>
                        <div id="success"></div>
                        <div class="form-group">
                            <button v-on:click.prevent="handleLogin" type="submit" class="btn btn-primary" >Login</button>
                        </div>
                    </form>
                    <div v-else>
                        <h3>Chào Admin</h3>
                        <button v-on:click.prevent="handleLogout" type="submit" class="btn btn-primary" >Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import { mapActions, mapState } from 'vuex';
import router from '../router';
export default {
    name: 'login-page',
    components: {
        PageHeader
    },
    data(){
        return {
            email: '',
            password : ''
        }
    },
    computed:{
        ...mapState(['isLogin'])
    },
    methods: {
        ...mapActions(['checkLogin', 'logout']),
        handleLogin(e){
            let data = {
                email : this.email,
                password : this.password
            }
            this.checkLogin(data).then(response => {
                if(response){
                    alert('Đăng nhập thành công.')
                    router.push({ path: '/' })
                } else {
                    alert('Đăng nhập thất bại.')
                }
            })
        },
        handleLogout() {
            this.logout()
        }
    }
}
</script>

<style></style>