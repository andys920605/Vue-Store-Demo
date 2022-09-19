<script setup>
import Search from '@/components/Search.vue'
import Product from '../components/Product.vue'

</script>
<template>

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
</style>