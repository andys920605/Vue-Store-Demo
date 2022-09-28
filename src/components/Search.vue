<script setup>
    

</script>

<template>

    <!--狀態1.短搜尋欄位加上登入按鈕
        狀態2.移除登入按鈕僅有搜尋欄（CSS註解處
        狀態3.搜尋後返回
        狀態4.返回以及篩選-->

<<<<<<< HEAD
        <div class="search-box">
            <i class="fa-solid fa-chevron-left"></i>
            <div class="search-item">
                <div class="search-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <span>搜尋你想找的商品</span>
=======
    <div class="search-box">
        <div v-bind:class="searchItem">
            <div class="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
>>>>>>> c81941026b6f98bd69b262ce2a1556b8ae39bf75
            </div>
    
        <RouterLink to="/the-welcome">
            <button class="search-btn">登入</button>
        </RouterLink>
        <div class="filter">
            <i class="fa-solid fa-filter"></i>
            <span>篩選</span>
        </div>
    </div>
    
</template>

<<<<<<< HEAD
=======
<script>
    // 模擬登入後拿到的token 
    var accessToken ={
        "account": "admin",
        "role": "1",
        "aud": "admin",
        "exp": 1660188986,
        "jti": "admin1660187186",
        "iat": 1660187186,
        "iss": "ginJWT",
        "nbf": 1660187187
    }
    // 將token存入localStorage
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
    export default {
        data () {  
            return {
                showLoginBtn:true,
                searchItem:'search-item',
            }
        },
        created () {
            this.getToken()
        },
        methods: {
            getToken(){
                // 取出token 
                var token = JSON.parse(localStorage.getItem('accessToken'));
                //console.log(token); 
                // 判斷token狀態，渲染畫面
                if (Object.keys(token).length === 0){
                    // 尚未登入狀態
                    this.showLoginBtn = true;
                    this.searchItem = 'search-item';
                }else{
                    // 登入狀態
                    this.showLoginBtn = false;
                    this.searchItem = 'search-item-login';
                }
            }

        }
    }
    
</script>




>>>>>>> c81941026b6f98bd69b262ce2a1556b8ae39bf75
<style>
    .search-box{
        margin: 0px 0 10px;
        display: flex;
        align-items: center;
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
        font-size: 16px;
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
    .search-box .fa-chevron-left{
    display: none;
    }
    .filter{
        display: none;
    }

    /* 狀態2.移除登入按鈕僅有搜尋欄（CSS註解處）*/
    /* .search-btn{
        display: none;
    }
    .search-item{
        width: 100%;
    }  */

    /* 狀態3.搜尋後返回*/
    /* .search-btn{
        display: none;
    }
    .search-item{
        width: 100%;
    } 
    .search-box .fa-chevron-left{
        padding-left: 15px; 
        font-size: 30px;
        color: rgb(62, 62, 62);
    }
    .search-item{
        margin-left: 10px;
    } */
    
    /* 狀態4.返回以及篩選*/
    /* .filter{
        display: flex;
        background: white;
        padding: 0px 12px;
        align-items: center;
        border-radius: 40px;
        color: rgb(62, 62, 62);
    }
    .filter span{
        font-size: 14px;
    }
    .filter .fa-filter{
        font-size: 18px;
    }
    .search-item{
    width: 60%;
    margin-right: 10px;
    } */
</style>
