<script setup>
import Search from '@/components/Search.vue'
import Product from '../components/Product.vue'
import Navbar from '@/components/Navbar.vue'

</script>
<template>

<Navbar />
<div class="bangs"></div>
<Search />

<div class="sort-bar">
    <div class="sort-item">
        <span>綜合排名</span>
        <i class="fa-solid fa-sort-down"></i>
    </div>
    <div class="sort-item">
        <span>價格</span>
        <i class="fa-solid fa-sort-down"></i>
    </div>
    <div class="sort-item">
        <span>新上架</span>
        <i class="fa-solid fa-sort-down"></i>
    </div>
</div>

    <Product />

</template>

<style>
    .sort-bar{
        margin: 0 20px 0px;
        display: flex;
        align-items: center;
        height: 50px;
        position: relative;
        color: rgb(92, 92, 92);
    }
    .sort-item{
        margin-right: 30px;
    }
    .sort-item span{
        margin-right: 10px;
        font-size: 16px;
    }
    .sort-item .fa-sort-down{
    position: absolute;
    font-size: 18px;
    bottom: 18px;
    }
    .filter{
    display: block;
    }
    .search-btn{
    display: none;
    }
    .filter{
    display: flex;
    background: white;
    padding: 0px 12px;
    align-items: center;
    border-radius: 40px;
    color: rgb(62, 62, 62);
    }
    .filter span{
        font-size: 14px;
    }
    .filter .fa-filter{
        font-size: 18px;
    }
    .search-item{
    width: 60%;
    margin-right: 10px;
    }
    .search-box .fa-chevron-left{
    display: block;
    }
    .search-box .fa-chevron-left{
    padding-left: 15px; 
    font-size: 30px;
    color: rgb(62, 62, 62);
    }
    .search-item{
    margin-left: 10px;
    } 
    .store-name,.view-store,.product-review-box,.promotion{
        /* display:initial; */
    }
    .product-item .img-box{
    height: 170px;
    }
</style>