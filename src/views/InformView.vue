<script setup>
import InformItem from '@/components/InformItem.vue'
import Navbar from '@/components/Navbar.vue'

</script>

<template>
    
    <Navbar />

    <div class="bangs"></div>
        <div class="title-box">
        <h1>通知</h1>
        <div class="select-area">
            <button id="all-read">全部已讀</button>
            <button id="choose">選取</button>
        </div>
    </div>

    <InformItem />
    <InformItem />
    <InformItem />
    <InformItem />
    <InformItem />
    <InformItem />
    <InformItem />

    <div class="bangs"></div>
    <div class="bangs"></div>


</template>

<style>
    .title-box{
    margin: 0 30px 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .title-box h1{
    font-size: 28px;
    } 
    .select-area{
    font-weight: 900;
    }
    .select-area #all-read{
    border: none;
    background: none;
    font-weight: 900;
    font-size: 16px;
    }
    .select-area #choose{
    border: 1px solid gray;
    border-radius: 20px;
    background: none;
    color: gray;
    padding: 5px 10px;
    font-size: 16px;
    margin-left: 10px;
    }

</style>