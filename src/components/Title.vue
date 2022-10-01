

<template>

    <h1>{{ name }}</h1>

</template>

<script>
export default {
    name: "Title",
    props:['name']
};
</script>

<style>
h1{
    font-size: 28px;
    margin: 40px 30px 20px;
    font-weight: 500;
}
</style>