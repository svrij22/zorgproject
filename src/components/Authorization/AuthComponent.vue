<template>
    <div class="reg-page">
        <div class="session">
            <div class="left"></div>
            <div class="form-group form">
                <div class="form-box">

                    <h4 style="margin-bottom: 30px">{{(authType === 'reg') ? 'Register' : 'Login'}}</h4>
                    <span class="sm">Username</span>
                    <input class="form-control" v-model="userdata.username">
                    <span class="sm">Password</span>
                    <input class="form-control" type="password" v-model="userdata.password">
                    <input class="form-control" type="password" v-model="userdata.password2" v-if="authType === 'reg'">
                    <span class="sm" v-if="authType === 'reg'">Name</span>
                    <div class="names" v-if="authType === 'reg'">
                        <input class="form-control" v-model="userdata.firstName">
                        <input class="form-control" v-model="userdata.lastName">
                    </div>

                    <span class="sm">{{loginmsg}}</span>
                    <div style="margin-top: 40px">
                        <div v-if="authType === 'reg'" style="display: flex; flex-direction: column">
                            <button class="btn btn-secondary" @click="register">Register</button>
                            <span v-if="false" class="sm cursor"
                                  @click="switchAuth">Already have an account? Login here</span>
                        </div>
                        <div v-else style="display: flex; flex-direction: column">
                            <button class="btn btn-secondary" @click="login">Login</button>
                            <span v-if="false" class="sm cursor" @click="switchAuth">New here? Register now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "AuthComponent",
        data: function () {
            return {
                loginmsg: '',
                userdata: {
                    username: 'root',
                    password: 'toord',
                    password2: 'toord',
                    firstName: 'bob',
                    lastName: 'marley',
                },
                authType: 'login'
            }
        },
        methods: {
            switchAuth() {
                this.authType = (this.authType == "login") ? "reg" : "login";
            },
            register() {

                if (this.userdata.password !== this.userdata.password2) {
                    this.loginmsg = "Passwords are not equal. Please check your input."
                    return;
                }

                axios({
                    url: this.$restip + "/register",
                    method: 'post',
                    data: {
                        username: this.userdata.username,
                        password: this.userdata.password,
                        firstName: this.userdata.firstName,
                        lastName: this.userdata.lastName
                    }
                }).then(() => {
                    this.loginmsg = "Account registered!"
                }).catch((error) => {
                    this.loginmsg = error.message;
                })
            },
            login() {
                axios({
                    url: this.$restip + "/login",
                    method: 'post',
                    data: {
                        username: this.userdata.username,
                        password: this.userdata.password,
                    }
                }).then((res) => {
                    this.loginmsg = "Logged in!"
                    localStorage.setItem("logintoken", res.headers.authorization)
                    this.$router.push("/main")
                }).catch((error) => {
                    this.loginmsg = error.message;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

    .reg-page {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .form-box {
        margin: 30px;
    }

    .form-group {
        background: white;
        opacity: 90%;
    }

    .form {
        width: 400px;
        padding: 10px;
    }

    .form-control {
        margin-bottom: 5px;
    }

    .names {
        display: flex;

        & input:first-of-type {
            margin-right: 10px;
        }
    }

    .cursor {
        cursor: pointer;
    }


    /*Imported CSS*/

    * {
        font-family: -apple-system, BlinkMacSystemFont, "San Francisco", Helvetica, Arial, sans-serif;
        font-weight: 300;
        margin: 0;
    }

    $primary: rgb(179, 105, 105);
    .reg-page {
        margin-top: 100px;
        width: 100vw;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }

    h4 {
        font-size: 24px;
        font-weight: 600;
        color: #000;
        opacity: .85;
    }

    label {
        font-size: 12.5px;
        color: #000;
        opacity: .8;
        font-weight: 400;
    }

    form {
        padding: 40px 30px;
        background: #fefefe;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 20px;

        h4 {
            margin-bottom: 20px;
            color: rgba(#000, .5);

            span {
                color: rgba(#000, 1);
                font-weight: 700;
            }
        }

        p {
            line-height: 155%;
            margin-bottom: 5px;
            font-size: 14px;
            color: #000;
            opacity: .65;
            font-weight: 400;
            max-width: 200px;
            margin-bottom: 40px;
        }
    }

    //TODO maybe?
    button {
        -webkit-appearance: none;
        width: auto;
        min-width: 100px;
        border-radius: 24px;
        text-align: center;
        padding: 15px 40px;
        margin-top: 5px;
        background-color: saturate($primary, 30%);
        color: #fff;
        font-size: 14px;
        margin-left: auto;
        font-weight: 500;
        box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, .13);
        border: none;
        transition: all .3s ease;
        outline: 0;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 2px 6px -1px rgba($primary, .65);

            &:active {
                transform: scale(.99);
            }
        }
    }

    input {
        font-size: 16px;
        padding: 20px 0px;
        height: 56px;
        border: none;
        border-bottom: solid 1px rgba(0, 0, 0, .1);
        background: #fff;
        min-width: 280px;
        box-sizing: border-box;
        transition: all .3s linear;
        color: #000;
        font-weight: 400;

        &:focus {
            border-bottom: solid 1px $primary;
            outline: 0;
            box-shadow: 0 2px 6px -8px rgba($primary, .45);
        }
    }

    .session {
        display: flex;
        flex-direction: row;
        width: auto;
        height: auto;
        margin: auto auto;
        border-radius: 4px;
        box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, .12);
    }

    .left {
        width: 220px;
        height: auto;
        background-image: url("../../assets/heart.png");
        background-position: center;
        background-size: cover;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;

        svg {
            height: 40px;
            width: auto;
            margin: 20px;
        }
    }
</style>