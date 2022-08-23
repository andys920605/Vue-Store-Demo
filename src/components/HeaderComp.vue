<script setup>

</script>

<template>
  <div class="header">
    <h1>歡迎回來,未來商行</h1>
    <!-- <div class="user-photo"><img src="@/assets/photo/22202752790536_831.webp" alt=""></div> -->
    <div class="header-right">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/the-welcome">Login</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </div>
  </div>
</template>

<style scoped>
* {box-sizing: border-box;}

body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: none;
  }
}
</style>