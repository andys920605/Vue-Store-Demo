<script setup>
</script>

<template>
  <div class="block" v-for="num in count">
    <h1>Hi here is test1 page &&{{num}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      count:50
    }
  }
}
</script>

<style>

</style>