<script setup>
</script>

<template>

    <div class="title-box">
        <RouterLink to="cart">
        <div class="angle-left">
            <i class="fa-solid fa-arrow-left"></i>
        </div>
        </RouterLink>
        <Title name="確認訂單" />
    </div>

    <div class="conf-cart-box">
        <div class="title">
            <div class="store">
                <div class="store-icon">
                    <i class="fa-solid fa-store"></i>
                </div>
                <div class="store-name">未來商行</div>
            </div>
        </div>

        <div class="conf-cart-item">
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
    margin: 40px 30px 20px;
    display: flex;
    align-items: center;
}
h1{
    margin: 0;
    line-height: 28px;
}
.angle-left{
    margin-right: 15px;
    font-size: 20px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border: 3px solid black;
    border-radius: 20px;
}
.conf-cart-box {
    background: white;
    margin: 0 10px 20px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
}
.conf-cart-box .title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 30px 10px;
}
.conf-cart-box .title .store {
    display: flex;
    align-items: center;
    color: gray;
}
.conf-cart-box .title .store-icon {
}
.conf-cart-box .title .store-icon .fa-store {
    font-size: 18px;
}
.conf-cart-box .title .store-name {
    padding: 0 10px;
    display: block;
    font-size: 18px;
}
.conf-cart-box .title .angle-right {}
.conf-cart-box .title .angle-right .fa-angle-right {}
.conf-cart-box .select-all {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 200px;
}
.conf-cart-item {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-rows: 35px 35px 35px 50px;
    grid-template-areas:
        "product-photo product-name product-name"
        "product-photo spec ."
        "product-photo product-price product-qty"
        "remark-title remark-content remark-content";
    font-size: 18px;
}
.conf-cart-item .product-qty {
    grid-area: product-qty;
    justify-self: center;
}
.conf-cart-item .remark-title {
    grid-area: remark-title;
    padding-left: 20px;
}
.conf-cart-item .remark-content {
    grid-area: remark-content;
    color: #aaa;
}
.conf-cart-item .product-photo {
    width: 80px;
    height: 80px;
    grid-area: product-photo;
    justify-self: center;
}
.conf-cart-item .product-photo img {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 20px;
}
.conf-cart-item .product-name {
    grid-area: product-name;
    font-size: 18px;
}
.conf-cart-item .spec {
    grid-area: spec;
    color: #777;
    border-radius: 10px;
    align-self: flex-start;
    font-size: 16px;
}
.conf-cart-item .product-price {
    grid-area: product-price;
    font-size: 22px;
    font-weight: bolder;
}
.conf-cart-item .qty-selection {
    grid-area: qty-selection;
    display: flex;
    justify-content: center;
    align-items: center;
}
.conf-cart-item .qty-selection button {
    width: 25px;
    height: 25px;
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
}
.conf-cart-item .qty-selection .qty {
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
.conf-cart-box {
    background: white;
    margin: 0 10px 20px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
}
.deliver-box,
.cart-list {
    background: #fff;
    padding: 10px 25px;
    margin: 0 10px 20px;
    border-radius: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
}
.cart-list .title-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.deliver-box .title-item button {
    background: none;
    border: none;
    font-weight: bolder;
    color: #333;
    font-size: 16px;
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
.deliver-box .deliver-way .price{
    font-size: 22px;
}
.pay-mod .choose {
    display: flex;
}
.pay-mod .choose button {
    background: none;
    border: none;
    margin-left: 6px;
}
.pay-mod {
    height: 35px;
    align-items: center;
}
.cart-total {
    background: #fff;
    border-radius: 50px 50px 0 0;
    padding: 20px 0 40px;
    text-align: center;
    font-size: 20px;
}
.cart-total .title {}
.cart-total .dollar {}
.cart-total .cart-total-item {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    margin: 20px 0;
}
.cart-total button {
    background: #333;
    border: none;
    color: #fff;
    padding: 10px 30px;
    text-align: center;
    word-spacing: 1em;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 16px;
}
.cart-total .deliver-total .title,
.cart-total .deliver-total .dollar {
    color: gray;
    font-size: 18px;
}
hr {
    border: 1px dashed gray;
    margin: 20px 30px;
}
</style>