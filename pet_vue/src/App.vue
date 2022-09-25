<template>
  <div class="app">
    <PostForm @create="createPost" />
    <Posts :posts="posts" />
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

.input {
  width: 100%;
  border: rgb(40, 61, 40) 1px solid;
  padding: 10px 15px;
  margin-top: 10px;
}
.app {
  padding: 20px;
}
</style>
