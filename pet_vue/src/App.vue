<template>
  <div class="app">
    <h2>Создать запись</h2>
    <mybtn
    class="button__createPost"
    @click="showDialog"
    >Создать
  </mybtn>
    <my-dialog v-model:show="dialogVisible">
    <PostForm @create="createPost" />
  </my-dialog>
    <Posts 
    @remove="removePost"
    :posts="posts" />
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import PostForm from "./components/PostForm.vue";
import MyDialog from './components/UI/MyDialog.vue';

export default {
  data() {
    return {
      posts: [
        { id: 1, title: "bnb", body: "binance" },
        { id: 2, title: "btc", body: "binance btc" },
        { id: 3, title: "eth", body: "binance eth" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post){
      this.posts = this.posts.filter(elem => elem.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true;
    }
  },
  components: { PostForm, Posts, MyDialog },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.button__createPost button{
  padding: 10px 20px;
  margin: 20px 0;
}
.app {
  padding: 20px;
 
}
</style>
