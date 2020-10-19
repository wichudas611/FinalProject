<template >
  <div class="bg-dark">
    <br />
    <div class="container">
      <h1 class="center white">หนังสือทั้งหมดในร้าน</h1>
      <h4 class="center white">
        จํานวนหนังสือทั้งหมด {{ books.length }} เล่ม
      </h4>

      <div v-for="book in books" v-bind:key="book.id">
        <div class="jumbotron center bg-light">
          <h1 class="display-4">{{ book.title }}</h1>
          <img :src="book.pic" :alt="book.title" width="30%" height="30%" />
          <br />
          <br />
          <h4>ผู้แต่ง: {{ book.author }}</h4>
          <h4>ราคา: {{ book.price }} บาท</h4>
          <h4>ประเภท: {{ book.type }}</h4>
          <p>
            <button
              class="btn btn-primary btn-lg"
              v-on:click="navigateTo('/order/create')"
            >
              สั่งซื้อ
            </button>
          </p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import BookService from "@/services/BookService";

export default {
  data() {
    return {
      books: [],
    };
  },
  async created() {
    this.books = (await BookService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteBook(book) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await BookService.delete(book);
          this.books = (await BookService.index()).data;
        } catch (err) {
          console.log(err);
        }
      }
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script> 
<style scoped>
.center {
  text-align: center;
}
.white {
  color: aliceblue;
}
</style>