<template>
  
  <div v-for="post in posts" class="post" v-bind:key="post.id" >
      <div> <strong>Название:</strong>  {{ post.title}}</div>
      <div> <strong>Описание:</strong> {{ post.body}}</div>
  </div>
</template>

<script>
  export default{
    props:{
      posts: {
        type: Array,
        required: true
      }

    }
  }
  
</script>

<style scoped>
.post{
  border: 2px rgb(95, 140, 95) solid;
  margin-top: 10px;
  }
</style>
