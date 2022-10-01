<script setup>
</script>

<template>

    <Navbar />

    <Title name="購物車" />

    <div class="cart-box">
    
    <div class="title">
        <div class="store">
        <div class="store-icon"><i class="fa-solid fa-store"></i></div>
        <div class="cart-store-name">未來商行</div>
        <div class="angle-right"><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="select-all">
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
        <div class="qty-selection">
        <button>-</button>
        <div class="qty">5</div>
        <button>+</button>
        </div>
        <div class="select-this">
        </div>
    </div>
    
    <!--   2 -->
    <div class="cart-item">
        <div class="product-photo">
        <img src="https://i.postimg.cc/YCyh23dc/v2-9e38b07334f7cd9e997bf469e37b17b2-b.png" alt="">  
        </div>
        <div class="product-name">原創手繪未來感擴散T...</div>
        <div class="spec">規格:白,L</div>
        <div class="product-price">$500</div>
        <div class="qty-selection">
        <button>-</button>
        <div class="qty">5</div>
        <button>+</button>
        </div>
        <div class="select-this">
        </div>
    </div>
    
    </div>

    <div class="settle-accounts">
        <div class="select-box">
        <div class="select-this">
            </div>
            <p>全選</p>
        </div>
    
        <h4>總計 <span>$</span>2500</h4>
        <RouterLink to="/confirm-order">
            <button>買單去</button>
        </RouterLink>
    </div>

</template>

<style>
    .cart-box{
    background: white;
    margin: 0 10px 20px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    }
    .cart-box .title{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 20px 10px;
    }
    .cart-box .title .store{
    display: flex;
    align-items: center;
    }
    .cart-box .title .store-icon{
    }
    .cart-box .title .store-icon .fa-store{
    }
    .cart-box .title .cart-store-name{
    padding: 0 5px;
    font-size: 20px;
    }
    .cart-box .title .angle-right{
    }
    .cart-box .title .angle-right .fa-angle-right{
    }
    .cart-box .select-all{
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 200px;
    }
    .cart-item{
    margin-top: 10px;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 35px 35px 35px 50px;
    grid-template-areas: 
        "product-photo product-name product-name"
        "product-photo spec ."
        "product-photo product-price product-price"
        ".  qty-selection select-this";
    }

    .cart-item .product-photo{
    width: 80px;
    height: 80px;
    grid-area: product-photo;
    justify-self: center;
    }
    .cart-item .product-photo img{
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 20px;
    }
    .cart-item .product-name{
    grid-area: product-name;
    }
    .cart-item .spec{
    grid-area: spec;
    width: 70px;
    background:  #555;
    padding: 8px 10px;
    color: #fff;
    border-radius: 10px;
    font-size: 14px;
    }
    .cart-item .product-price{
    grid-area: product-price;
    }
    .cart-item .qty-selection{
    grid-area: qty-selection;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .cart-item .qty-selection button{
    width: 25px;
    height: 25px;
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
    }
    .cart-item .qty-selection .qty{
    padding: 0 15px;
    } 
    .select-this{
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 200px;
    grid-area: select-this;
    justify-self: flex-end;
    margin-right: 20px;
    }
    .settle-accounts{
    background: #fff;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    justify-content:  space-between;
    align-items: center;
    padding: 10px 0px 80px;
    font-size: 18px;
    }
    .settle-accounts .select-this{
    margin: 0;
    margin-left: 20px;
    margin-right: 10px;
    }
    .settle-accounts button{
    border: none;
    border-radius: 20px;
    background: #333;
    color: #fff;
    padding: 8px 12px;
    margin-right: 20px;
    font-size: 16px;
    }
    .settle-accounts .select-box{
    display: flex;
    align-items: center;
    }
    .settle-accounts span{
    font-size: 18px;
    }
</style>