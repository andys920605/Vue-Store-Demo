<script setup>
import Search from '@/components/Search.vue'
import ItemBtn from '@/components/ItemBtn.vue'
import Activity from '@/components/Activity.vue'
import Product from '@/components/Product.vue'
import Navbar from '@/components/Navbar.vue'
import Btn from '@/components/Btn.vue'

</script>

<template>

  <!-- 登入後才有導覽列 -->
  <Navbar />

  <!-- 搜尋欄位 -->
  <Search />

  <!-- banner -->
  <div class="banner">banner</div>

  <!-- 主頁常用連結 -->
  <div class="btn-outer">
    <Btn />
    <Btn />
    <Btn />
    <Btn />
    <Btn />
    <Btn />
    <Btn />
    <Btn />
    <Btn />
    <Btn />
  </div>
  <!-- 活動 -->
  <Activity />
  
  <div class="banner">熱賣商品</div>

  <h2>推薦商品</h2>

  <!-- 產品 -->
  <Product />

    <div class="bangs"></div>



</template>

<style>
  .banner{
    margin: 20px auto 0;
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
    margin: 30px 0 10px;
  }
  .btn-outer{
    /* background: red; */
    margin: 30px auto 0;
    width: 90%;
    height: 180px;
    text-align:center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .btn{
    margin: 0px 5px;
  }
</style>
