<script setup>
</script>

<template>
    
    <Navbar />

        <div class="title-box">
            <Title name="訊息" /> 
            <div class="user-photo">
                <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt="">
            </div>
        </div>

    <!-- 搜尋元件 -->
    <Search />

    <div class="state-box">
        <button id="all-message">全部</button>
        <button id="unread">未讀</button>
        <button id="no-reply">未回覆</button>
    </div>

    <MessageItem />
    <MessageItem />
    <MessageItem />
    <MessageItem />
    <MessageItem />
    <MessageItem />

    <div class="bangs"></div>
    <div class="bangs"></div>


</template>

<style>
.title-box{
    margin: 40px 30px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    h1{
        margin: 0;
    }
    .title-box .user-photo{
    width: 30px;
    height: 30px;
    }
    .title-box .user-photo img{
    width: 100%;
    height: 100%;
    border-radius: 200px;
    border: 1px solid gray;
    }
    .state-box{
    padding-left: 30px;
    margin: 20px 0;
    }
    .state-box button{
    color: gray;
    border: 1.5px solid gray;
    border-radius: 20px;
    padding: 5px 9px;
    margin-right: 8px;
    background: none;
    font-weight: bolder;
    font-size: 16px;
    }
    .state-box #all-message{
    background: gray;
    color: white;
    }
    .search-btn{
        display: none;
    }
    .search-item{
        width: 100%;
    }
</style>