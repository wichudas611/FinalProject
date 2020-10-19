<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <div class="jumbotron center">
        <h1>Admin <br />Menu</h1>
        <br />
        <p>
          <button class="btn btn-primary" v-on:click="navigateTo('/users')">
            ผู้ดูแลทั้งหมด
          </button>
        </p>
        <p>
          <button class="btn btn-primary" v-on:click="navigateTo('/books')">
            หนังสือทั้งหมด
          </button>
        </p>
        <p>
          <button class="btn btn-primary" v-on:click="navigateTo('/orders')">
            คำสั่งซื้อทั้งหมด
          </button>
        </p>
        <p>
          <button
            class="btn btn-outline-danger my-2 my-sm-0"
            v-on:click="navigateTo('/login')"
            type="submit"
          >
            ออกจากระบบ
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  logout() {
    this.$store.dispatch("setToken", null);
    this.$store.dispatch("setUser", null);
    this.$router.push({
      name: "login",
    });
  },
};
</script>

<style>
.center {
  text-align: center;
}
.white {
  color: aliceblue;
}
.pad {
  padding: 5% 20%;
}
</style>