<template>
  <div class="app">
    <h2>Создать запись</h2>
    <mybtn class="button__createPost" @click="showDialog">Создать </mybtn>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </my-dialog>
    <Posts 
    @remove="removePost" 
    :posts="posts" 
    v-if="!isLoadingPosts"
    />
    <div v-else><p>подождите, идет загрузка...</p> </div>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import PostForm from "./components/PostForm.vue";
import MyDialog from "./components/UI/MyDialog.vue";
import Mybtn from "./components/UI/Mybtn.vue";
import axios from "axios";

export default {
  components: { PostForm, Posts, MyDialog, Mybtn },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isLoadingPosts: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((elem) => elem.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },

    async getPosts() {
      try {
        this.isLoadingPosts = true;//пока данные подгружаются, работает крутилка
        setTimeout(async() => {
          
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=15");
          this.posts = response.data;
          this.isLoadingPosts = false;
        }, 1000);

      } catch (error) {
        alert("error");
      }
     
    },

  },
  // mounted хук жизненного цикла
  mounted() {
    
       this.getPosts()
     },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.button__createPost button {
  padding: 10px 20px;
  margin: 20px 0;
}
.app {
  padding: 20px;
}
</style>
