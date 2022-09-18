<script setup>
import Search from '@/components/Search.vue'
import ItemBtn from '@/components/ItemBtn.vue'
import Activity from '@/components/Activity.vue'
import Product from '@/components/Product.vue'
import Navbar from '@/components/Navbar.vue'


</script>

<template>

  <!-- 登入後才有導覽列 -->
  <Navbar />

  <!-- 搜尋欄位 -->
  <Search />

  <!-- banner -->
  <div class="banner">banner</div>

  <!-- 主頁常用連結 -->
  <ItemBtn />

  <!-- 活動 -->
  <Activity />
  
  <div class="banner">熱賣商品</div>

  <h2>推薦商品</h2>

  <!-- 產品 -->
  <Product />

  <RouterLink to="/">Home</RouterLink>
  <hr>
  <RouterLink to="/the-welcome">Login</RouterLink>
  <hr>
  <RouterLink to="/about">About</RouterLink>
  <hr>
  <RouterLink to="/true-home">True home</RouterLink>
  <hr>

    <div class="bangs"></div>



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
