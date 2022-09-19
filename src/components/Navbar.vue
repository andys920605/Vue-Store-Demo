<script setup>
    

</script>

<template>

    <!-- 導覽列 -->
    <nav>
        <div class="navbar">

            <RouterLink to="/">
                <div class="navbar-item navbar-home">
                    <div class="icon"><i class="fa-solid fa-house"></i></div>
                    <div class="text">主頁</div>
                </div>
            </RouterLink>

            <RouterLink to="/">
                <div class="navbar-item navbar-inform">
                    <div class="icon"><i class="fa-solid fa-bell"></i></div>
                    <div class="text">通知</div>
                </div>
            </RouterLink>

            <RouterLink to="/">
                <div class="navbar-item navbar-message">
                    <div class="icon"><i class="fa-solid fa-comment-dots"></i></div>
                    <div class="text">訊息</div>
                </div>
            </RouterLink>

            <RouterLink to="/">
                <div class="navbar-item navbar-car">
                    <div class="icon"><i class="fa-solid fa-cart-shopping"></i></div>
                    <div class="text">購物車</div>
                </div>
            </RouterLink>

            <RouterLink to="/my">
                <div class="navbar-item navbar-my">
                    <div class="icon"><i class="fa-solid fa-user"></i></div>
                    <div class="text">我的</div>
                </div>
            </RouterLink>

        </div>
    </nav>

</template>

<style>

    /* 買家導覽列 */
    .navbar-store{
        display: none;
    }

</style>