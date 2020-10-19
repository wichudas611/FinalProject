<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <h1 class="center white">แก้ไขข้อมูล</h1>
      <div class="jumbotron center bg-light">
      <form v-on:submit.prevent="editBook">
        <p class="left">
          ชื่อหนังสือ:
          <input class="form-control " type="text" v-model="book.title" />
        </p>
        <p class="left">
          ผู้แต่ง:
          <input class="form-control " type="text" v-model="book.author" />
        </p>
        <p class="left">
          ราคา:
          <input class="form-control " type="text" v-model="book.price" />
        </p>
        <p class="left">
          ประเภท:
          <input class="form-control " type="text" v-model="book.type" />
        </p>
        <p class="left">
          ภาพ:
          <input class="form-control " type="text" v-model="book.pic" />
        </p>
        <p>
          <button class="btn btn-primary btn-lg" type="submit">แก้ไข</button>
        </p>
      </form>
      </div>
    </div>
  </div>
</template>
<script>
import BookService from "@/services/BookService";
export default {
  data() {
    return {
      book: {
        title: "",
        author: "",
        price: "",
        type: "",
        pic: "",
      },
    };
  },
  methods: {
    async editBook() {
      try {
        await BookService.put(this.book);
        this.$router.push({
          name: "books",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    try {
      let bookId = this.$route.params.bookId;
      this.book = (await BookService.show(bookId)).data;
    } catch (error) {
      console.log(error);
    }
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
.pad{
  padding: 3% 20%;
}
.left{
  text-align: left;
}
</style>