<template>
  <div class="bg-dark">
    <nav class="navbar navbar-light bg-light">
      <button
        class="navbar-brand btn btn-outline"
        v-on:click="navigateTo('/IndexAdmin')"
      >
        BookSale
      </button>

      <button
        class="btn btn-outline-danger my-2 my-sm-0"
        v-on:click="logout"
        type="submit"
      >
        ออกจากระบบ
      </button>
    </nav>
    <br />
    <div class="container">
      <h2 class="center white">คำสั่งซื้อทั้งหมด</h2>
      <h4 class="center white">
        จํานวนคำสั่งซื้อทั้งหมด {{ orders.length }} รายการ
      </h4>
      <div v-for="order in orders" v-bind:key="order.id">
        <div class="jumbotron center bg-light">
          <h3>รหัส: {{ order.id }}</h3>
          <h4>ชื่อหนังสือ: {{ order.title }}</h4>
          <h4>ราคา: {{ order.price }}</h4>
          <h4>ชื่อผู้สั่ง: {{ order.name }}</h4>
          <h4>ที่อยู่จัดส่ง: {{ order.address }}</h4>
          <p>
            <button
              class="btn btn-primary btn-lg"
              v-on:click="navigateTo('/order/edit/' + order.id)"
            >
              แก้ไขข้อมูล
            </button>
            <button
              class="btn btn-danger btn-lg"
              v-on:click="deleteOrder(order)"
            >
              ลบข้อมูล
            </button>
          </p>
        </div>
        <hr />
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import OrderService from "@/services/OrderService";

export default {
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    this.orders = (await OrderService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteOrder(order) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await OrderService.delete(order);
          this.orders = (await OrderService.index()).data;
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