<script setup>
    

</script>

<template>

    <!-- 賣家專用導覽列 -->
    <nav>
        <div class="navbar">

            <div class="navbar-item navbar-store">
                <div class="icon"><i class="fa-solid fa-shop"></i></div>
                <div class="text">商店</div>
            </div>

            <div class="navbar-item navbar-inform">
                <div class="icon"><i class="fa-solid fa-bell"></i></div>
                <div class="text">通知</div>
            </div>

            <div class="navbar-item navbar-message">
                <div class="icon"><i class="fa-solid fa-comment-dots"></i></div>
                <div class="text">訊息</div>
            </div>

            <div class="navbar-item navbar-my">
                <div class="icon"><i class="fa-solid fa-user"></i></div>
                <div class="text">我的</div>
            </div>

        </div>
    </nav>

</template>

<style>

    /* 買家導覽列 */
    .navbar-store{
        display: none;
    }

</style>