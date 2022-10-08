<template>
  <div class="navbar">
    <div @click="$router.push('/posts')">Vue3</div>
    <div class="navbar__buttons">
      <mybtn @click="$router.push('/posts')">все посты</mybtn>
      <mybtn @click="$router.push('/')"  style="margin-left: 20px">На главную</mybtn>
 
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  align-items: center;
  height: 80px;
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  background-color: rgb(200, 214, 214);
  box-shadow: 2px 2px 2px grey;
}
.navbar__buttons {
  display: flex;
  margin-left: auto;
}
</style>
