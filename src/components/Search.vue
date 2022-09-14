<script setup>
    

</script>

<template>

    <!--狀態1.短搜尋欄位加上登入按鈕
        狀態2.移除登入按鈕僅有搜尋欄（CSS註解處） -->

    <div class="search-box">
        <div class="search-item">
            <div class="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <span>搜尋你想找的商品</span>
        </div>
        <button class="search-btn">登入</button>
    </div>
    
</template>

<style>
    .search-box{
        margin: 45px 0 30px;
        display: flex;
    }
    .search-item{
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
    .search-btn{
        font-size: 22px;
        background: none;
        border: none;
    }

    /* 搜尋欄登入後變化
    .search-btn{
        display: none;
    }
    .search-item{
        width: 100%;
    } */
</style>