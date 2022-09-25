<script setup>

</script>

<template>

<div class="bangs"></div>

<div class="message-title">
    <RouterLink to="/message">
    <button>
        <i class="fa-solid fa-chevron-left"></i>
    </button>
    </RouterLink>
    <div class="account-number">
        <p>Vanessa</p>
        <p>@vanessa3489</p>
    </div>
    <button class="info">i</button>
    </div>
    
    <div class="message-box">
    <div class="message-time">
        2022/08/16(週二)
    </div>
    <div class="communication-box">
        <div class="photo"> <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt=""></div>
        <div class="communication-item">
        請問預計哪時候出貨
        </div>
        <div class="communication-time">18:13</div>
    </div>
    
        <div class="communication-box reply-box">
        <div class="communication-item">
        目前預計明天
        </div>
        <div class="communication-time">18:13</div>
    </div>

    
    <div class="message-time">
        2022/08/17(週三)
    </div>
    
        <div class="communication-box">
        <div class="photo"> <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt=""></div>
        <div class="communication-item">
        嗨
        </div>
        <div class="communication-time">18:13</div>
    </div>
    
        <div class="communication-box">
        <div class="photo"> <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt=""></div>
        <div class="communication-item">
        嗨
        </div>
        <div class="communication-time">18:13</div>
    </div>

    <!-- <div class="communication-box">
        <div class="photo"> <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt=""></div>
        <div class="communication-item">
        嗨
        </div>
        <div class="communication-time">18:13</div>
    </div>    
    
    <div class="communication-box">
        <div class="photo"> <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt=""></div>
        <div class="communication-item">
        嗨
        </div>
        <div class="communication-time">18:13</div>
    </div>    

    <div class="communication-box">
        <div class="photo"> <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt=""></div>
        <div class="communication-item">
        嗨
        </div>
        <div class="communication-time">18:13</div>
    </div>     -->
    
    </div>

    
    <div class="message-functional-area">
        <button class="circle-plus">
            <i class="fa-solid fa-plus"></i>
        </button>
        <button>
            <i class="fa-regular fa-image"></i>
        </button>
        <div class="type-area">
            <span>請輸入訊息......</span>
            <button>
                <i class="fa-regular fa-face-smile"></i>
            </button>
        </div>
    </div>

</template>

<style>

.message-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px 20px;
}
button{
    background: none;
    border: none;
}
.message-title .info{
    font-size: 22px;
    font-weight: 900;
    width: 30px;
    height: 30px;
    border: 3px solid #333;
    border-radius: 200px;
}
.message-box{
    margin-top: 5px;
    text-align: center;
    width: 100%;
    height: calc(100vh - 180px);
    padding-top: 1px;
    background: rgb(255, 255, 255);
    border-radius: 60px 60px 0 0;
}
.message-time{
    font-size: 10px;
    margin: 20px 0px ;
    color: gray;
}
.communication-box{
    margin: 10px 0;
    margin-left: 10px;
    display: flex;
    align-items: center;
}
.communication-box .photo{
    align-self: flex-end;
    width: 30px;
    height: 30px;
}
.communication-box .photo img{
    width: 100%;
    height: 100%;
    border-radius: 200px;
    border: 1px solid black;
}
.communication-item{
    background: #aaa;
    padding: 15px;
    border-radius: 15px 15px 15px 0;
    margin: 0 5px 0 10px;
    font-size: 16px;
}
.communication-time{
    font-size: 12px;
    align-self: flex-end;
}
.reply-box{
    flex-direction: row-reverse;
    margin-right: 10px;
}
.reply-box .communication-item{
    border-radius: 15px 15px 0px 15px;
    background: #333;
    color: white;
}
.message-functional-area{
    width: 100%;
    height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    align-items: center;  
    margin: 5px auto 0px;
    padding-bottom: 15px;
    bottom: 0;
    z-index: 100;
    background: white;
    padding-left: 5px;
}
.message-functional-area button{
    font-size: 28px;
}
.message-functional-area .type-area{
    background: rgb(233, 233, 233);
    width: 240px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 5px;
    padding-right: 10px;
}
.message-functional-area .type-area span{
    font-size: 14px;
    padding-left: 20px;
    color: #333;
}
</style>