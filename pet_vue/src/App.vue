<template>
  <div class="app">
    <PostForm @create="createPost" />
    <Posts 
    @remove="removePost"
    :posts="posts" />
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import PostForm from "./components/PostForm.vue";

export default {
  data() {
    return {
      posts: [
        { id: 1, title: "bnb", body: "binance" },
        { id: 2, title: "btc", body: "binance btc" },
        { id: 3, title: "eth", body: "binance eth" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post){
      this.posts = this.posts.filter(elem => elem.id !== post.id)
    }
  },
  components: { PostForm, Posts },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.app {
  padding: 20px;
}
</style>
