<template>
  <form @submit.prevent>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="название"
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="описание"
    />
    <button @click="createPost" class="btn">добавить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    createPost() {
      id: Date.now(), this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 10px;
  padding: 10px 20px;
  align-self: flex-end;
  border: 1px solid rgb(77, 149, 77);
  background-color: none;
  color: rgb(39, 80, 80);
}
</style>
