<script setup>

</script>

<template>

<div class="title-box">
    <div class="angle-left">
        <i class="fa-solid fa-arrow-left"></i>
    </div>
    <h1>確認訂單</h1>
</div>

<div class="cart-box">
    <div class="title">
        <div class="store">
            <div class="store-icon"><i class="fa-solid fa-store"></i></div>
            <div class="store-name">未來商行</div>
        </div>
    </div>

    <!--   1 -->
    <div class="cart-item">
        <div class="product-photo">
            <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt="">
        </div>
        <div class="product-name">原創手繪未來感擴散T...</div>
        <div class="spec">規格:白,L</div>
        <div class="product-price">$500</div>
        <div class="product-qty">X5</div>
        <div class="remark-title">訂單備註：</div>
        <div class="remark-content">統一編號/電話聯絡時間</div>

    </div>

</div>


<div class="deliver-box  cart-list">
    <div class="title-item">
        <div class="title">送貨方式</div>
        <button>更改</button>
    </div>
    <div class="deliver-way">
        <div class="item">711(中港門市)</div>
        <div class="price">$60</div>
    </div>
    <div class="estimate">預計到貨時間9/23~10/5</div>
</div>


<div class="cart-list pay-mod">
    <div class="title-item">
        <div class="title">付款方式</div>
        <div class="choose">
            <div class="mod">貨到付款</div>
            <button><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
</div>

<div class="cart-list pay-mod">
    <div class="title-item">
        <div class="title">折扣</div>
        <div class="choose">
            <div class="mod">免運</div>
            <button><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
</div>

<div class="cart-total">
    <div class="product-total cart-total-item">
        <div class="title">商品總價</div>
        <div class="dollar">$2500</div>
    </div>

    <div class="deliver-total cart-total-item">
        <div class="title">運費</div>
        <div class="dollar">$60</div>
    </div>

    <hr>

    <div class="total-amount cart-total-item">
        <div class="title">總計</div>
        <div class="dollar">$2560</div>
    </div>

    <button>結 帳</button>
</div>
</template>

<style>
.title-box {
    margin: 0 30px 0 20px;
    display: flex;
    align-items: center;
}

.angle-left {
    font-size: 18px;
    width: 22px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    border: 2px solid black;
    border-radius: 20px;
}

.title-box h1 {
    font-size: 28px;
    margin-left: 10px;
}

.cart-box {
    background: white;
    margin: 0 10px 20px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
}

.cart-box .title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 20px 10px;
}

.cart-box .title .store {
    display: flex;
    align-items: center;
}

.cart-box .title .store-icon {}

.cart-box .title .store-icon .fa-store {}

.cart-box .title .store-name {
    padding: 0 5px;
}

.cart-box .title .angle-right {}

.cart-box .title .angle-right .fa-angle-right {}

.cart-box .select-all {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 200px;
}

.cart-item {
    margin-top: 10px;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 35px 35px 35px 50px;
    grid-template-areas:
        "product-photo product-name product-name"
        "product-photo spec ."
        "product-photo product-price product-qty"
        "remark-title remark-content remark-content";
}

.cart-item .product-qty {
    grid-area: product-qty;
    justify-self: center;
}

.cart-item .remark-title {
    grid-area: remark-title;
    padding-left: 20px;
}

.cart-item .remark-content {
    grid-area: remark-content;
    color: #aaa;
}

.cart-item .product-photo {
    width: 80px;
    height: 80px;
    grid-area: product-photo;
    justify-self: center;
}

.cart-item .product-photo img {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 20px;
}

.cart-item .product-name {
    grid-area: product-name;
}

.cart-item .spec {
    grid-area: spec;
    width: 70px;
    color: #777;
    border-radius: 10px;
    font-size: 12px;
    align-self: flex-start;
}

.cart-item .product-price {
    grid-area: product-price;
    font-size: 22px;
    font-weight: bolder;
}

.cart-item .qty-selection {
    grid-area: qty-selection;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-item .qty-selection button {
    width: 25px;
    height: 25px;
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
}

.cart-item .qty-selection .qty {
    padding: 0 15px;
}

.select-this {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 200px;
    grid-area: select-this;
    justify-self: flex-end;
    margin-right: 20px;
}

.settle-accounts {
    background: #fff;
    display: flex;
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 60px;
    position: fixed;
}

.settle-accounts .select-this {
    margin: 0;
    margin-left: 20px;
    margin-right: 10px;
}

.settle-accounts button {
    border: none;
    border-radius: 20px;
    background: #333;
    color: #fff;
    padding: 8px 12px;
    margin-right: 20px;
}

.settle-accounts .select-box {
    display: flex;
    align-items: center;
}

.settle-accounts span {
    font-size: 14px;
}

.cart-box {
    background: white;
    margin: 0 10px 20px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
}

.deliver-box,
.cart-list {
    background: #fff;
    padding: 10px 20px;
    margin: 0 10px 20px;
    border-radius: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
}

.cart-list .title-item {
    font-size: 14px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.deliver-box .title-item button {
    background: none;
    border: none;
    font-weight: bolder;
    color: #333;
}

.deliver-box .deliver-way {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0 5px;
    padding-right: 10px;
}

.deliver-box .estimate {
    width: 100%;
    font-size: 14px;
    color: gray;
}

.pay-mod .choose {
    display: flex;
}

.pay-mod .choose button {
    background: none;
    border: none;
}

.pay-mod {
    height: 35px;
    align-items: center;
}

.cart-total {
    background: #fff;
    border-radius: 50px 50px 0 0;
    padding: 20px 0;
    text-align: center;
}

.cart-total .title {}

.cart-total .dollar {}

.cart-total .cart-total-item {
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    margin: 20px 0;
}

.cart-total button {
    background: #333;
    border: none;
    color: #fff;
    padding: 5px 30px;
    text-align: center;
    word-spacing: 1em;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 16px;
}

.cart-total .deliver-total .title,
.cart-total .deliver-total .dollar {
    color: gray;
}

hr {
    border: .5px dashed gray;
    margin: 20px 50px;
}
</style>