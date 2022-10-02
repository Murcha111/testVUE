<template>
  <div class="app">
    <h2>Создать запись</h2>
    <div class="app__btns">
      <mybtn class="button__createPost" @click="showDialog">Создать </mybtn>
      <my-select v-model="selected" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>
    <Posts @remove="removePost" :posts="posts" v-if="!isLoadingPosts" />
    <div v-else><p>подождите, идет загрузка...</p></div>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import PostForm from "./components/PostForm.vue";
import MyDialog from "./components/UI/MyDialog.vue";
import Mybtn from "./components/UI/Mybtn.vue";
import axios from "axios";
import MySelect from "./components/UI/MySelect.vue";

export default {
 
  components: { PostForm, Posts, MyDialog, Mybtn, MySelect },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isLoadingPosts: false,
      selected: '',
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по содержимому" },
      ]
    };
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
        this.isLoadingPosts = true; //пока данные подгружаются, работает крутилка
       
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=15"
          );
        
          this.posts = response.data;
          this.isLoadingPosts = false;
       
      } catch (error) {
        alert("error");
      }
    },
  },
  // mounted хук жизненного цикла
  mounted() {
    this.getPosts();
  },

  watch: {
    selected(newValue){
     this.posts.sort((post1, post2) => {
      return post1[this.selected]?.localeCompare(post2[this.selected])
    })
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.button__createPost button {
  /* padding: 10px 20px; */
  /* margin: 20px 0; */
}
.app {
  padding: 20px;
}
.app__btns {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
</style>
