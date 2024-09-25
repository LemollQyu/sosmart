<template>
  <div
    class="auth page flex flex-col gap-12 font-nunito bottom-20 absolute left-1/2 -translate-x-1/2"
  >
    <!-- Header Title -->
    <h1 class="text-2xl font-semibold mt-10 text-center">Lupa Kata Sandi</h1>
    <!-- Centered text -->
    <p class="mt-2 text-gray-600 text-center">
      Masukkan nomor ponsel atau email untuk mereset kata sandi
    </p>

    <!-- Input Nomor Ponsel atau Email -->

    <div class="auth page flex flex-col gap-12 font-nunito mt-10">
      <div class="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
        <span class="absolute text-xs left-2 top-1"> Nomor ponsel atau email </span>
        <input
          v-model="phoneOrEmail"
          type="text"
          class="font-bold w-full outline-none h-full bg-[#f1f1f1]"
        />
      </div>
    </div>

    <!-- Button Selanjutnya -->
    <button
      class="w-full max-w-md h-12 mt-28 rounded-lg h-[50px] flex items-center justify-center border-2 border-black"
    >
      Selanjutnya
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>

<style scoped></style>
