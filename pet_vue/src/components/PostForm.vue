<template>
  <form @submit.prevent>
    <my-input
      v-model="post.title"
   
      placeholder="название"
    />
    <my-input
      v-model="post.body"
  
      placeholder="описание"
    />
    <mybtn
    @click="createPost" 
    class=" formBtn">добавить
    </mybtn>
  </form>
</template>

<script>
import MyInput from './UI/MyInput.vue';

export default {
  components: { MyInput },
 
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
.formBtn button {
  margin-top: 10px;
  padding: 10px 20px;
  align-self: flex-end;
}
</style>
