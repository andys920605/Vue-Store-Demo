<script setup>
import Btn from '@/components/Btn.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<template>

    <Navbar />

    <div class="bangs"></div>

    <!-- 使用者選擇 -->
    <div class="user-box">
        <div class="user-photo">
            <img src="@/assets/photo/buyer.png" alt="">
        </div>
        <div class="user-name">
            <div class="name">user</div>
            <div class="id">@harry1294</div>
        </div>
        <div class="choose">
            <i class="fa-solid fa-caret-down"></i>
        </div>
    </div>

    <!-- 追蹤賣場＋收藏＋評價 -->
    <div class="section-buyer">
        <div class="tracked-seller section-item">
            <div class="number">100</div>
            <p>追蹤的賣場</p>
        </div>
        <div class="collect section-item">
            <div class="number">3872</div>
            <p>收藏夾</p>
        </div>
        <div class="evaluation section-item">
            <div class="number">4.6</div>
            <p>購物評價</p>
        </div>
    </div>
    
    <!-- 我的訂單 -->
    <div class="my-order">
        <div class="title">
            <h3>我的訂單</h3>
            <p>查看更多</p>
        </div>
        <div class="my-btn">
            <Btn />
            <Btn /> 
            <Btn /> 
            <Btn /> 
            <Btn /> 
        </div>
    </div>

    <div class="sitting-box">

        <div class="sitting-outer">
            <div class="sitting-item bottom-line member">
                <div class="icon">
                    <i class="icon-sitting fa-solid fa-circle-user"></i>
                </div>
                <p>會員</p>
            </div>
            <div class="sitting-item account-sitting">
                <div class="icon">
                    <i class="icon-sitting fa-solid fa-gear"></i>
                </div>
                <p>我的帳號設定</p>
            </div>
        </div>
        
        <div class="sitting-outer">
            <div class="sitting-item">
                <div class="icon">
                    <i class="icon-sitting fa-solid fa-handshake"></i>
                </div>
                <p>分潤計畫</p>
            </div>
        </div>

        <div class="sitting-outer">
            <div class="sitting-item bottom-line member">
                <div class="icon">
                    <i class="icon-sitting fa-solid fa-comment-dots"></i>
                </div>
                <p>訊息設定</p>
            </div>
            <div class="sitting-item bottom-line member">
                <div class="icon">
                    <i class="icon-sitting fa-solid fa-bell"></i>
                </div>
                <p>提醒設定</p>
            </div>
            <div class="sitting-item account-sitting">
                <div class="icon">
                    <i class="icon-sitting fa-solid fa-truck"></i>
                </div>
                <p>物流設定</p>
            </div>
        </div>


    </div>

    <div class="bangs"></div>
    <div class="bangs"></div>
</template>


<style>
    .user-box{
        margin-left: 40px;
        display: flex;
        align-items: center;
    }
    .user-photo{
        border: 2px solid rgb(45, 45, 45);
        background: gray;
        width: 60px;
        height: 60px;
        border-radius: 200px;
    }
    .user-photo img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
        -webkit-filter:grayscale(1);
    }
    .user-name{
        margin: 0 40px 0 20px;
        font-size: 18px;
    }
    .user-name .name{
        font-weight: 600;
        font-size: 22px;
    }
    .user-name .id{
        color: gray;
        font-size: 16px;
    }
    .user-box .choose{
        text-align: center;
        background: rgb(66, 66, 66);
        border-radius: 200px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        position: relative;
    }
    .user-box .choose .fa-caret-down{
        font-size: 20px;
        color: white;
    }
    .section-buyer{
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .section-item{
        width: 150px;
        text-align: center;
        padding: 5px 0;
    }
    .section-buyer .collect{
        border-left: 1px solid rgb(67, 67, 67);
        border-right: 1px solid rgb(67, 67, 67);
    }
    .section-item .number{
        font-size: 20px;
        padding-bottom: 5px;
        font-weight: 600;
    }        
    .section-item p{
        font-size: 14px;
    }
    .my-order{
        color: gray;
        background: white;
        margin: 10px;
        padding-bottom: 10px;
        border-radius: 25px;
    }
    .my-order .title{
        color: rgb(72, 72, 72);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px 5px 30px;
    }
    .my-order h3{
        font-weight: 400;
        font-size: 18px;
    }
    .my-order .title p{
    color: gray;
    font-size: 14px;
    }
    .my-order .title p::after{
        content: '\f054';
        padding-left: 4px;
        font: var(--fa-font-solid);
        font-weight: 600;
    }
    .my-btn{
        display: flex;
        justify-content: space-evenly;
        margin: 15px 0 10px;
    }
    .sitting-item{
        color: gray;
        padding: 12px 50px;
        background: white;
        display: flex;
        align-items: center;
        border-radius: 20px;
    }
    .sitting-item .icon{
        text-align: center;
        width: 50px;
    }
    .sitting-item .icon .icon-sitting{
        font-size: 32px;
        background: white;
    }
    .sitting-item .icon .fa-truck{
        font-size: 28px;
    }
    .sitting-item p{
        font-size: 18px;
        padding-left: 30px;
        line-height: 35px;
        display: inline-block;
    }
    .sitting-outer{
        background: white;
        margin: 20px 10px;
        border-radius: 20px;
    }
    .bottom-line{
        position: relative;
    }
    .bottom-line::after{
        position: absolute;
        content: '';
        background: gray;
        width: 80%;
        height: .5px;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>