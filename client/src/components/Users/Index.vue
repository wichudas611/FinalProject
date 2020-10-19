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
      <h2 class="center white">ผู้ดูแลทั้งหมด</h2>
      <h4 class="center white">
        จํานวนผู้ดูแลทั้งหมด {{ users.length }} คน
        <button class="btn btn-primary" v-on:click="navigateTo('/user/create')">
          เพิ่มผู้ดูแล
        </button>
      </h4>
      <div v-for="user in users" v-bind:key="user.id">
        <div class="jumbotron center bg-light">
          <h3>รหัส: {{ user.id }}</h3>
          <h4>ชื่อ-นามสกุล: {{ user.name }} - {{ user.lastname }}</h4>
          <h4>อีเมล: {{ user.email }}</h4>
          <h4>รหัสผ่าน: {{ user.password }}</h4>
          <p>
            <button
              class="btn btn-primary btn-lg"
              v-on:click="navigateTo('/user/edit/' + user.id)"
            >
              แก้ไขข้อมูล
            </button>
            <button class="btn btn-danger btn-lg" v-on:click="deleteUser(user)">
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
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    this.users = (await UsersService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UsersService.delete(user);
          this.users = (await UsersService.index()).data;
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