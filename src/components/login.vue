<template>
    <div class="wrapper">
        <div id="app2">
            <div class="row justify-content-center container singIn">
                <h1>Sign in</h1>
            </div>
            <div class="row container form">
                <form action="" id="form" class="justify-content-start container" @submit="formValidation">
                    <div class="form-group">
                        <label for="username">EMAIL</label>
                        <input type="text" class="form-control" id="username" placeholder="username/email" v-model="email">
                        <p class="errors">{{emailError}}</p>
                    </div>
                    <div class="form-group">
                        <label for="password">
                            PASSWORD
                            <a href="#" @click="showHidePassword" id="eye"> <i class="fa fa-eye"></i> </a>
                            </label>
                            <input :type="passwordtype" class="form-control" id="password" placeholder="Password" v-model="password">
                            <p class="errors">{{passwordError}}</p>
                    </div>
                    <button type="submit" class="btn btn-default">SIGN IN</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
        passwordtype: 'password',
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        everythingGood: false
    }
  },
  mounted () {
    this.axios.get('http://api.myjson.com/bins/1ega42').then(response => this.api = response.data);
  },
  methods: {
    showHidePassword: function () {
        if(this.passwordtype == 'password') {
            this.passwordtype = 'text'
        } else {
            this.passwordtype = 'password'
        }
    },
    formValidation: function(e) {
        e.preventDefault();
        if(this.email == '') {
            this.emailError = "Email is required!"
        } else if (!this.emailValidation()){
            this.emailError = "Email shoud be luka@gmail.com!"
        } else {
            this.emailError = ''
        }
        if(this.password == ''){
            this.passwordError = 'Password is required!'
        } else if(this.password.length < 3){
            this.passwordError = 'Password is minimum 5 characters!'
        } else if(this.password !== 'superdecko'){
            this.passwordError = 'Password shoud be superdecko'
        }else {
            this.passwordError = '';
            this.$router.push({ path: '/homepage' })
        }
        
    },
    emailValidation: function() {
        if(this.email == 'luka@gmail.com') {
            return true
        } else {
            return false
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.wrapper{
    position: relative;
    height: calc(100vh - 28px);
    #app2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 35%;
    form {
        width: 100%;
        margin-top: 75px;
        input {
            color: rgb(32, 32, 32);
            background-color:rgba($color: #daeee3, $alpha: 0.8);
            border: none;
            padding: 20px 25px;
            font-size: 20px;
            border-radius: 50px;
        }
        label {
            margin-left: 20px;
            margin-bottom: 20px;
            font-size: 25px;
            color: rgb(29, 29, 29);

        }
        button {
            border-radius: 50px;
            margin: 30px auto 0;
            display: block;
            padding: 10px 30px;
            background-color: rgb(30, 43, 161);
            color: white;
        }
        #eye {
            position: absolute;
            right: 0;
            transform: translate(-200%,100%)
        }
        .errors {
            color: rgb(196, 20, 87);
            display: block;
            padding-left: 40px;
            font-size: 27px;
        }
    }
}
}

</style>
