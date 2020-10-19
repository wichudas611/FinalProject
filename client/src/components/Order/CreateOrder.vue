<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <h1 class="center white">สั่งหนังสือ</h1>
      <div class="jumbotron center bg-light">
        <form v-on:submit.prevent="createOrder">
          <p class="left">
            ชื่อหนังสือ:
            <input class="form-control " type="text" v-model="order.title"/>
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
            <button class="btn btn-primary btn-lg" type="submit">สั่งซื้อ</button>
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
    async createOrder() {
      try {
        await OrderService.post(this.order);
        this.$router.push({
          name: "MenuBook",
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