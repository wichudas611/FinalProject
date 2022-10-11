<template >
  <div class="bg-dark">
    <nav class="navbar navbar-light bg-light">
      <button class="navbar-brand btn btn-outline" v-on:click="navigateTo('/IndexAdmin')">Car Rental</button>
      
        <button class="btn btn-outline-danger my-2 my-sm-0" v-on:click="logout" type="submit">
          ออกจากระบบ
        </button>

    </nav>
    <br />
    <div class="container">
      <h1 class="center white">รถยนต์ทั้งหมด</h1>
      <h4 class="center white">
        จํานวนรถยนต์ทั้งหมด {{ books.length }} คัน
        <button class="btn btn-primary" v-on:click="navigateTo('/book/create')">
          เพิ่มรถยนต์
        </button>
      </h4>

      <div v-for="book in books" v-bind:key="book.id">
        <div class="jumbotron center bg-light">
          <h1 class="display-4">{{ book.title }}</h1>
          <img :src="book.pic" :alt="book.title" width="30%" height="30%" />
          <br />
          <br />
          <h4>ยี่ห้อรถยนต์ : {{ book.author }}</h4>
          <h4>ราคา : {{ book.type }} บาท</h4>
          <h4>จำนวนวันในการเช่ายืม : {{ book.price }}</h4>
          <p>
            <button
              class="btn btn-primary btn-lg"
              v-on:click="navigateTo('/book/edit/' + book.id)"
            >
              แก้ไขข้อมูล
            </button>
            <button class="btn btn-danger btn-lg" v-on:click="deleteBook(book)">
              ลบข้อมูล
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
      BASE_URL: "http://localhost:8081/asset"
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