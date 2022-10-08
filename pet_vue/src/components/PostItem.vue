<template>
  <div class="post">
    <div>
      <p>{{ post.id }}</p>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <mybtn 
      @click="$emit('remove', post)"
      class="postItem_button"
      >Удалить</mybtn>
      <mybtn 
      @click="$router.push(`/posts/${post.id}`)"
      class="postItem_button"
      >Открыть</mybtn>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px rgb(57, 83, 57) solid;
  margin-top: 10px;
  padding: 15px;
}
.postItem_button {
padding: 10px 20px;
}
.post__btns{
  display: flex;
}
</style>
