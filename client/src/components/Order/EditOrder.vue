<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <h1 class="center white">แก้ไขข้อมูล</h1>
      <div class="jumbotron center bg-light">
      <form v-on:submit.prevent="editOrder">
        <p class="left">
          ชื่อหนังสือ:
          <input class="form-control " type="text" v-model="order.title" />
        </p>
        <p class="left">
          ราคา:
          <input class="form-control " type="text" v-model="order.price" />
        </p>
        <p class="left">
          ชื่อผู้สั่ง:
          <input class="form-control " type="text" v-model="order.name" />
        </p>
        <p class="left">
          ที่อยู่จัดส่ง:
          <input class="form-control " type="text" v-model="order.address" />
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
import OrderService from "@/services/OrderService";
export default {
  data() {
    return {
      order: {
        title: "",
        price: "",
        name: "",
        address: "",
      },
    };
  },
  methods: {
    async editOrder() {
      try {
        await OrderService.put(this.order);
        this.$router.push({
          name: "orders",
        });
      } catch (err) {
        console.log(err);
      }
    },
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