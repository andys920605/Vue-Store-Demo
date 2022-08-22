<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

  <RouterView />
</template>
