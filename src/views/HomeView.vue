<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import test1 from '@/components/test1.vue'
import test2 from '@/components/test2.vue'


</script>

<template>
    <HeaderComp />
    <main>
        <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab">
        {{ tab }}
        </button>

    <component :is="currentTabComponent"></component>

    <nav>
        <div class="navbar">
            <div class="navbar-item navbar-store">
                <div class="icon"><i class="fa-solid fa-shop"></i></div>
                <div class="text">商店</div>
            </div>
            <div class="navbar-item navbar-message">
                <div class="icon"><i class="fa-solid fa-comment-dots"></i></div>
                <div class="text">訊息</div>
            </div>
            <div class="navbar-item navbar-inform">
                <div class="icon"><i class="fa-solid fa-bell"></i></div>
                <div class="text">通知</div>
            </div>
            <div class="navbar-item navbar-my">
                <div class="icon"><i class="fa-solid fa-user"></i></div>
                <div class="text">我的</div>
            </div>
        </div>
    </nav>

    <div class="bangs"></div>
    </main>
</template>

<script>
export default {
    data () {
        return {
        currentTab: 'HelloWorld',
        tabs: ['HelloWorld', 'test1', 'test2'],
        message:'',
        }
    },
    computed: {
        currentTabComponent() {
        //console.log(this.currentTab.toLowerCase());
        return this.currentTab.toLowerCase();
        },
    },
    components:{
        'helloworld':HelloWorld,
        'test1':test1,
        'test2':test2,
    }
}
</script>




<style>

</style>
