<template>
  <div class="container login-comp">
    <form @submit.prevent="loginUser">
      <div class="form-inner-flex">
        <label for="username">Username:</label>
        <input v-model="username" id="username" name="username" type="text" placeholder="niko1" />
      </div>

      <div class="form-inner-flex">
        <label for="password">Password:</label>
        <input v-model="password" id="password" name="password" type="text" placeholder="*******" />
      </div>

      <button>Login</button>
      <div class="register-wrap">
        <p>Don't have an account?</p>
        <RouterLink to="/register">Register</RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const username = ref(null)
const password = ref(null)

const token = ref(null)
const loginUser = async () => {
  try {
    const response = fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'johnd',
        password: 'm38rmF$'
      })
    })

    const data = response.json()
    token.value = data
    console.log(token.value)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style>
.login-comp {
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 10rem;
}

.login-comp form {
  border-radius: 5px;
  box-shadow: 2px 4px 9px 1px rgba(0, 0, 0, 0.39);
  -webkit-box-shadow: 2px 4px 9px 1px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 2px 4px 9px 1px rgba(0, 0, 0, 0.39);
  padding: 2rem;
  width: 80%;
  height: 30rem;
}

.login-comp form .form-inner-flex {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 3rem;
}

.login-comp form .form-inner-flex label {
  font-size: 1.6rem;
}

.login-comp form .form-inner-flex input {
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  outline: none;
}

.login-comp form button {
  border: none;
  width: 100%;
  padding: 1rem 0;
  background-color: rgb(88, 88, 212);
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  margin-bottom: 2rem;
}

.login-comp form .register-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 1.4rem;
}

.login-comp form .register-wrap a {
  font-style: none;
  color: blue;
  text-decoration: none;
  font-size: 1.6rem;
}
</style>
