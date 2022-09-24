<script setup>
</script>

<template>

    <!--狀態1.短搜尋欄位加上登入按鈕
        狀態2.移除登入按鈕僅有搜尋欄（CSS註解處） -->

    <div class="search-box">
        <div v-bind:class="searchItem">
            <div class="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <span>搜尋你想找的商品</span>
        </div>
        <button class="search-btn" v-show="showLoginBtn">登入</button>
    </div>
    
</template>

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
    .search-item-login{
        margin: 0 20px;
        height: 45px;
        width: 100%;
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