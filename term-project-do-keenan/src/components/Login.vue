<template>
    <h1 class="title">
        Login with Email and Password
    </h1>
    <div class="border">
    <h3>
        Email
    </h3>
    <input type="text" v-model="email" placeholder="Email" />
    <h3 class="header">
        Password
    </h3>
    <input type="text" v-model="password" placeholder="Password" />
    <button v-on:click="signin">Login</button>    
    </div>
    
</template>

<script>

    import{getAuth, signInWithEmailAndPassword} from "firebase/auth";
    import {useRouter} from "vue-router";

    export default {
        name: 'Login',
        setup() {
            const router = useRouter();
            return {
                router
            };
        },
        data() {
            return{
                email: '',
                password: ''
            };
        },
        methods: {
            signin: function() {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password).then((cred) => {
                    console.log("Signed in as", cred.user?.email);
                    this.router.back();
                })
                .catch((err) => {
                    console.error("Oops, error is ", err);
                });
            }
        }
    };

    /*
    import{getAuth, signInWithEmailAndPassword, type UserCredential} from "firebase/auth";
    import {ref} from "vue";
    import {useRouter} from "vue-router";
    const auth = getAuth();
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const signin = async () => {
        try{
            signInWithEmailAndPassword(auth, email.value, password.value).then((cred: UserCredential) => {
        console.log("Signed in as", cred.user?.email);
        router.back();
        })
        .catch((err: any) => {
            console.error("Oops, error is ", err);
        });
        }
        catch{
        
        }
    };*/
    


</script>

<style scoped>
.title{
    text-align: center;
    color: white;
}
.header{
    text-align: center;
    color: white;
}
.border{
  background-color: #1a1a2e;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-bottom: 40px;
  border-radius: 8px;
}
</style>