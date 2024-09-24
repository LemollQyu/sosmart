<template>

  <!-- Authentikasi -->

    <div class="gap-5 flex flex-col mx-auto font-bold font-nunito absolute left-1/2 bottom-10 -translate-x-1/2">

      <button class="w-[312px] h-[50px] rounded-lg border-2 border-black">
          Buat akun baru
      </button>

      <button class="w-[312px] h-[50px] rounded-lg border-2 border-black">
        <NuxtLink to="/login">Masuk</NuxtLink>
      </button>

      <h1 class="font-nunito font-extralight text-center">Atau</h1>
      <h1 class="font-nunito font-extralight text-center">Masuk</h1>
 
      


      <div class="mx-auto gap-[20px] flex">
        <div class="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
            <img src="./public/wrapper.png"/>
        </div>
        <div class="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
          <img src="./public/mobile.png" />

      </div>
      </div>
            


    </div>

</template>
