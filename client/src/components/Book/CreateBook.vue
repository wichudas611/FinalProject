<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <h1 class="center white">Add Car</h1>
      <div class="jumbotron center bg-light">
        <form v-on:submit.prevent="createBook">
          <p class="left">
            ยี่ห้อรถ :
            <input class="form-control " type="text" v-model="book.title"/>
          </p>
          <p class="left">
            ทะเบียนรถ :
            <input class="form-control " type="text" v-model="book.author" />
          </p>
          <p class="left">
            ระยะเวลาในการให้เช่า :
            <input class="form-control " type="text" v-model="book.price" />
          </p>
          <p class="left">
            ราคา :
            <input class="form-control " type="text" v-model="book.type" />
          </p>
          <p class="left">
            Picture Car :
            <input class="form-control " type="text" v-model="book.pic" />
          </p>
          <p>
            <button class="btn btn-primary btn-lg" type="submit">เพิ่ม</button>
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
    async createBook() {
      try {
        await BookService.post(this.book);
        this.$router.push({
          name: "books",
        });
      } catch (err) {
        console.log(err);
      }
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
.pad{
  padding: 3% 20%;
}
.left{
  text-align: left;
}
</style>