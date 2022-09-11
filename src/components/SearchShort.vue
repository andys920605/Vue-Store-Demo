<script setup>
    

</script>

<template>
    <div class="search-short-box">
        <div class="search-short">
            <div class="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <span>搜尋你想找的商品</span>
        </div>
        <button class="search-short-bt">登入</button>
    </div>
</template>

<style>
    .search-short-box{
        margin: 45px 0 30px;
        display: flex;
    }
    .search-short{
        margin: 0 20px;
        height: 45px;
        width: 70%;
        background: white;
        border-radius: 30px;
        display: flex;
        color: gray;
    }
    span{
        font-size: 20px;
        padding-left: 10px;
        line-height: 45px;
    }
    .search-icon .fa-magnifying-glass{
        font-size: 24px;
        line-height: 45px;
    }
    .search-icon{
        padding-left: 15px;
    }
    .search-short-bt{
        font-size: 22px;
        background: none;
        border: none;
    }
</style>