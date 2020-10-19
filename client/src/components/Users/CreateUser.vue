<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <h1 class="center white">เพิ่มผู้ดูแล</h1>
      <div class="jumbotron center bg-light">
        <form v-on:submit.prevent="createUser">
          <p class="left">
            ชื่อ:
            <input class="form-control " type="text" v-model="user.name" />
          </p>
          <p class="left">
            นามสกุล:
            <input class="form-control " type="text" v-model="user.lastname" />
          </p>
          <p class="left">
            อีเมล:
            <input class="form-control " type="text" v-model="user.email" />
          </p>
          <p class="left">
            รหัสผ่าน:
            <input class="form-control " type="text" v-model="user.password" />
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
import UsersService from "@/services/UsersService";
export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "users",
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