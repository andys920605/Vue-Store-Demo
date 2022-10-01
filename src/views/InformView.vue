<script setup>
</script>

<template>
    
    <Navbar />

        <div class="title-box">
        <Title name="通知" />
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
    margin: 40px 30px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    h1{
        margin: 0;
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