<template>
    
    <div class="bangs"></div>
    
    <RouterLink to="my">
    <i class="fa-solid fa-chevron-left"></i>
    </RouterLink>
    <Search />

    <div class="order-state">
        <select>
            <option>全部</option>
            <option>待付款</option>
            <option>待出貨</option>
            <option>待評價</option>
            <option>已完成</option>
        </select>
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
</template>

<script>
import Search from '../components/Search.vue';
    export default {
    components: { Search }
}
</script>

<style>
.order-state{
    margin: 10px 30px 20px;
}
.order-state select{
    background: #fff;
    border-radius: 5px;
    width: 90px;
    height: 45px;
    font-size: 18px;
    padding: 10px;
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

.conf-cart-box .title .store-icon {}

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
</style>