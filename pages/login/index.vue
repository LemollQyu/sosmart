<script setup>
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div
    class="auth page flex flex-col gap-12 font-nunito bottom-16 absolute left-1/2 -translate-x-1/2"
  >
    <div class="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
    <form class="flex flex-col gap-4">
      <div class="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
        <span class="absolute text-xs left-2 top-0">Nomor ponsel atau email</span>
        <input
          v-model="phoneOrEmail"
          type="text"
          class="font-bold w-full outline-none h-full bg-[#f1f1f1]"
        />
      </div>

      <div class="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
        <span class="absolute text-xs left-2 top-0">Password</span>
        <input
          v-model="password"
          type="password"
          class="font-bold w-full h-full bg-[#f1f1f1] outline-none"
        />
      </div>

      <button
        @click.prevent="login"
        class="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black"
      >
        Masuk
      </button>
      <p class="text-center font-bold text-blue-500">
        Lupa kata sandi?
        <NuxtLink to="/password" class="font-bold text-blue-500">Klik di sini</NuxtLink>
      </p>
    </form>

    <div class="flex justify-center space-x-4">
      <p class="text-center">
        Belum punya akun?
        <span class="font-bold text-blue-500"
          ><NuxtLink to="/registrasi"> Daftar </NuxtLink></span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneOrEmail: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("Nomor ponsel atau email:", this.phoneOrEmail);
      console.log("Password:", this.password);
      // Lakukan tindakan login di sini
    },
  },
};
</script>

<style scoped></style>
