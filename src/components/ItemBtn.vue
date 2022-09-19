<script setup>
</script>

<template>

    <!-- 主頁常用連結 -->

    <div class="item-btn-box">
        <RouterLink to="/Search">
        <div class="item-btn">
            <div class="item-icon">
                <i class="fa-solid fa-shirt"></i>
            </div>
        </div>
        </RouterLink>
        <div class="item-btn">
            <div class="item-icon">
                <i class="fa-solid fa-shirt"></i>
            </div>
        </div>
        <div class="item-btn">
            <div class="item-icon">
                <i class="fa-solid fa-shirt"></i>
            </div>
        </div>
        <div class="item-btn">
            <div class="item-icon">
                <i class="fa-solid fa-shirt"></i>
            </div>
        </div>
        <!-- <div class="item-btn">
            <div class="item-icon">
                <i class="fa-solid fa-shirt"></i>
            </div>
        </div>
        <div class="item-btn">
            <div class="item-icon">
                <i class="fa-solid fa-shirt"></i>
            </div>
        </div>
        <div class="item-btn">
            <div class="item-icon">
                <i class="fa-solid fa-shirt"></i>
            </div>
        </div>
        <div class="item-btn">
            <div class="item-icon">
                <i class="fa-solid fa-shirt"></i>
            </div>
        </div> -->
    </div>

</template>





<style>
    .item-btn-box{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 0 auto 20px;
    }
    .item-btn{
        margin: 10px 8px 20px;
        width: 60px;
        height: 60px;
        background: rgb(124, 124, 124);
        border-radius: 200px;
        text-align: center;
    }
    .item-icon .fa-shirt{
        font-size: 35px;
        line-height: 65px;
        color: white;
    }
    .item-btn::after{
        content: '衣服';
        color: gray;
        font-size: 16px;
    }    

</style>