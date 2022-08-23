<script setup>

</script>

<template>
    <!-- <h1>This is an login page</h1> -->
    <div class="welcome">
        <h1>歡迎</h1>
        <div class="commercial-img">
            <img src="@/assets/photo/Dayflow - Buy Online (1).png" alt="">
        </div>
    </div>

    <div class="sign-btn-box">
        <button class="sign-btn sign-in-btn">登入帳號</button>
        <RouterLink to="/sign-up"><button class="sign-btn sign-up-btn">註冊帳號</button></RouterLink>
    </div>

    <div class="choose-sign">
        <div class="text-box">
            <div class="line"></div>
            <div class="text">或</div>
        </div>
    </div>

    <div class="choose-sign-btn">
        <div class="choose-icon google-icon"><i class="fa-brands fa-google"></i></div>
        <div class="choose-icon facebook-icon"><i class="fa-brands fa-facebook"></i></div>
        <div class="choose-icon apple-icon"><i class="fa-brands fa-apple"></i></div>
    </div>
</template>


<style>

</style>