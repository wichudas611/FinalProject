<template>
  <div>
    <h1>Show Order</h1>
      <p>id: {{ order.id }}</p>
      <p>title: {{ order.title }}</p>
      <p>price: {{ order.price }}</p>
      <p>name: {{ order.name }}</p>
      <p>address: {{ order.address }}</p>
  </div>
</template>
<script>
import OrderService from "@/services/OrderService";
export default {
  data() {
    return {
      order: null,
    };
  },
  async created() {
    try {
      let orderId = this.$route.params.orderId;
      this.order = (await OrderService.show(orderId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>