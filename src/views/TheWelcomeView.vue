<script setup>

</script>

<template>
    <div class="welcome">
        <h1>歡迎</h1>
        <div class="commercial-img">
            <img src="@/assets/photo/Dayflow-BuyOnline(1).png" alt="">
        </div>
    </div>

    <div class="sign-btn-box">
        <RouterLink to="/sign-in">
            <button class="sign-btn sign-in-btn">登入帳號</button>
        </RouterLink>
        <RouterLink to="/sign-up">
            <button class="sign-btn sign-up-btn">註冊帳號</button>
        </RouterLink>
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