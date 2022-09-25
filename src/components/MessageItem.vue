

<template>

<RouterLink to="/chat-room">
    <div class="message-item">
        <div class="user-photo">
            <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt="">
        </div>
        
        <div class="account-number-box">
            <h2>qwert1523</h2>
            <p>請問預計哪時候出貨?</p>
        </div>
        
        <div class="time-box">
            <p class="message-time">16:40</p>
            <p class="message-number">99</p>
        </div>
    </div>
</RouterLink>

</template>

<style>
    .message-item{
    color: gray;
    background: white;
    width: 90%;
    height: 80px;
    margin: 0px 20px 10px;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    }
    .message-item .user-photo{
    width: 40px;
    height: 40px;
    }
    .message-item .user-photo img{
    width: 100%;
    height: 100%;
    border: 1px solid gray;
    border-radius: 200px;
    }
    .message-item .account-number-box{
    width: 55%;
    }
    .message-item .account-number-box h2{
    margin: 0;
    font-size: 20px;
    margin-bottom: 5px;
    padding: 0;
    }
    .message-item .account-number-box p{
    margin: 0;
    font-size: 16px;
    }
    .message-item .time-box{
    text-align: center;
    font-size: 12px;
    margin-right: 5px;
    }
    .message-item .time-box .message-time{
    margin: 0;
    margin-bottom: 10px;
    }
    .message-item .time-box .message-number{
    font-weight: bolder;
    background: gray;
    color: white;
    display: inline-block;
    padding: 5px 8px;
    border-radius: 200px;
    margin: 0;
    font-size: 14px;
    }
</style>