<template>
    <div class="bangs"></div>
    <div class="sign-in">
        <h1>登入</h1>
    </div>

    <!-- 帳號輸入框 -->
    <div class="form account-number-icon"> 
        <input type="text" id="account-number" class="form-input form-input-captcha" autocomplete="off" placeholder=" ">
        <label for="account-number" class="form-label">帳號</label>
    </div>

    <!-- 密碼輸入框 -->
    <div class="form password-icon">
        <input type="text" id="password" class="form-input form-input-captcha" autocomplete="off" placeholder=" ">
        <label for="password" class="form-label">密碼</label>
    </div>

    <div class="btn-box">
        <button type="submit" class="send-number-btn">登入帳號</button>
    </div>

    <div class="choose-sign">
        <div class="text-box">
            <div class="line"></div>
            <div class="text">或</div>
        </div>
    </div>

    <div class="sign-in-icon-box">
        <div class="sign-in-icon sign-in-icon-google">
            <p>連接至  GOOGLE</p>
        </div>
        <div class="sign-in-icon sign-in-icon-facebook">
            <p>連接至 FACEBOOK</p>
        </div>
        <div class="sign-in-icon sign-in-icon-apple">
            <p>連接至  APPLE</p>
        </div>
    </div>
</template>

<style>

</style>
