<script setup>
import InformItem from '@/components/InformItem.vue'
import Navbar from '@/components/Navbar.vue'
import MessageItem from '@/components/MessageItem.vue'
import Search from '@/components/Search.vue'


</script>

<template>
    
    <Navbar />

    <div class="bangs"></div>
    
        <div class="title-box">
            <h1>訊息</h1>
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
    margin: 0 30px 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .title-box h1{
    font-size: 28px;
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