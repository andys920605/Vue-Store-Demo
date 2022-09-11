<script>

</script>

<template>

    <div class="simple-product-box">
        <div class="simple-product-item">
            <div class="img-item">
                <img src="@/assets/photo/product01.jpeg" alt="">
            </div>
            <div class="product-name">原創手繪未來感擴散T</div>
            <div class="product-price">$500</div>
        </div>

        <div class="simple-product-item">
            <div class="img-item img-item-short">
                <img src="@/assets/photo/product02.webp" alt="">
            </div>
            <div class="product-name">金屬機械支架未來感擴散</div>
            <div class="product-price">$3000</div>
        </div>

        <div class="simple-product-item">
            <div class="img-item img-item-short">
                <img src="@/assets/photo/product02.webp" alt="">
            </div>
            <div class="product-name">金屬機械支架未來感擴散</div>
            <div class="product-price">$3000</div>
        </div>

        <div class="simple-product-item">
            <div class="img-item">
                <img src="@/assets/photo/product01.jpeg" alt="">
            </div>
            <div class="product-name">原創手繪未來感擴散T</div>
            <div class="product-price">$500</div>
        </div>
        
    </div>



</template>

<style>
    
    .simple-product-box{
        margin: 20px 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .simple-product-item{
        margin-bottom: 15px;
    }
    .simple-product-item .img-item{
        width: 160px;
        height: 200px;
        margin-bottom: 10px;
    }
    .simple-product-item .img-item img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        -webkit-filter:grayscale(1);
    }
    .product-name{
        overflow: hidden;
        /* text-overflow: ellipsis; */
        white-space: nowrap;
        margin: 2px 0;
        font-size: 16px;
        width: 160px;
    }
    .product-price{
        font-size: 20px;
        font-weight: 700;
    }
    .simple-product-item .img-item-short{
        width: 160px;
        height: 160px;
    }
</style>