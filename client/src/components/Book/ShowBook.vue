<template>
  <div>
    <h1>Show Book</h1>
      <p>id: {{ book.id }}</p>
      <p>title: {{ book.title }}</p>
      <p>author: {{ book.author }}</p>
      <p>price: {{ book.price }}</p>
      <p>type: {{ book.type }}</p>
  </div>
</template>
<script>
import BookService from "@/services/BookService";
export default {
  data() {
    return {
      book: null,
    };
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
</style>