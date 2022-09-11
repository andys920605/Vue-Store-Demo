<script setup>
import SearchShort from '@/components/SearchShort.vue'
import ItemBtn from '@/components/ItemBtn.vue'
import Activity from '@/components/Activity.vue'
import SimpleProduct from '@/components/SimpleProduct.vue'


</script>

<template>
    <SearchShort />

    <div class="banner">banner</div>

    <ItemBtn />
    <Activity />

    <div class="banner">熱賣商品</div>
    
    <h2>推薦商品</h2>
    <SimpleProduct />

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
