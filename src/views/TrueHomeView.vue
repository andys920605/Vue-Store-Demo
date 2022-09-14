<script setup>
import Search from '@/components/Search.vue'
import ItemBtn from '@/components/ItemBtn.vue'
import Activity from '@/components/Activity.vue'
import Product from '@/components/Product.vue'


</script>

<template>
    <Search />

    <div class="banner">banner</div>

    <ItemBtn />
    <Activity />

    <div class="banner">熱賣商品</div>
    
    <h2>推薦商品</h2>
    <Product />

</template>

<style>
  .banner{
    margin: 0 auto;
    width: 90%;
    height: 160px;
    line-height: 160px;
    border-radius: 20px;
    background: gray;
    text-align: center;
    font-size: 30px;
    color: white;
  }
  h2{
    font-weight: 500;
    font-size: 22px;
    padding-left: 25px;
    margin: 30px 0 0;
  }
</style>
