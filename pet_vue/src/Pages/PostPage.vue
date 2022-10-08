<template>
  <div >
    <h2>Создать запись</h2>
    <my-input placeholder="поиск..." v-model="searchWord" />
    <div class="app__btns">
      <mybtn class="button__createPost" @click="showDialog">Создать </mybtn>
      <my-select v-model="selected" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>
    <Posts
      @remove="removePost"
      :posts="searchedAndFilteredPosts"
      v-if="!isLoadingPosts"
    />
    <div v-else><p>подождите, идет загрузка...</p></div>
  </div>
  <div class="page__wrapper">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{
        'current-page': page === pageNumber,
      }"
      style="color: blue"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import PostForm from "@/components/PostForm.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import Mybtn from "@/components/UI/Mybtn.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";

export default {
  components: { PostForm, Posts, MyDialog, Mybtn, MySelect },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isLoadingPosts: false,
      selected: "",
      searchWord: "",
      page: 1,
      limitOfPages: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по содержимому" },
      ],
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

    //ф-ия смены номера страницы
    changePage(pageNumber) {
      this.page = pageNumber;
     
    },

    async getPosts() {
      try {
        this.isLoadingPosts = true; //пока данные подгружаются, работает крутилка

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            //в параметрах указываем динамические номер страницы и лимит постов на странице
            params: {
              _page: this.page,
              _limit: this.limitOfPages,
            },
          }
        );
        // 101 / 10 = 11 страниц например
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limitOfPages
        ); //округлили
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

  computed: {
    sortedOurPosts() {
      //чтобы не мутировать исходный массив с постами, разворачиваем его с рест оператором, мутировать будет его копия в итоге

      return [...this.posts].sort((post1, post2) =>
        post1[this.selected]?.localeCompare(post2[this.selected])
      );
    },

    searchedAndFilteredPosts() {
      return this.sortedOurPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchWord.toLowerCase())
      );
    },

  
  },

    //при смене страницы наблюдатель тригерит вызов ф-ции getPosts
    watch: {
      page(){
        console.log('список изменился')
        this.getPosts()
      }
    
    }
  //как пример:
  // watch: {
  //   selected(newValue){
  //    this.posts.sort((post1, post2) => {
  //     return post1[this.selected]?.localeCompare(post2[this.selected])
  //   })
  //   }
  // }
};
</script>

<style>
.app__btns {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  margin: 25x;
  display: flex;
  justify-content: center;
}
.page {
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
}
.current-page {
  border: 2px solid teal;
}
</style>
