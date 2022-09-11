<script setup>
</script>

<template>
    <div class="item-btn-box">
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
        margin: 30px 8px 20px;
        width: 65px;
        height: 65px;
        background: gray;
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