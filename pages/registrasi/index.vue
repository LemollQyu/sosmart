<script setup>
    definePageMeta({
        layout: "auth",
    });
</script>

<template>


    
     <div class="auth page flex flex-col gap-5 font-nunito bottom-5 absolute left-1/2 -translate-x-1/2">
        <div class="flex flex-col gap-2">
            <h1 class="text-center text-xl font-bold">Daftar sekarang</h1>
            <p class="text-center font-extralight text-sm">Silakan isi detail dan buat akun</p>
            </div>
        <form class="flex flex-col gap-4">
            <div class="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                <span class="absolute text-xs left-2 top-0">Nama lengkap</span>
                <input class="font-bold w-full outline-none h-full bg-[#f1f1f1]"/>
            </div>
            <div class="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                <span class="absolute text-xs left-2 top-0">Email</span>
                <input class="font-bold w-full h-full bg-[#f1f1f1] outline-none" />
            </div>  

            <div class="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                <span class="absolute text-xs left-2 top-0">Password</span>
                <input class="font-bold w-full h-full bg-[#f1f1f1] outline-none" type="password"/>
            </div>
            <p class="text-sm font-extralight">Kata sandi minimal 5 karakter</p>

            <button class="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black">Daftar</button>
        </form> 

        <p class="text-center">Sudah punya akun? <span class="font-bold text-blue-500"><NuxtLink to="/login"> Login </NuxtLink></span></p>
        

        <p class="text-center">Atau</p>

        <div class="mx-auto gap-[20px] flex">
            <div class="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
                <img src="../../public/wrapper.png"/>
            </div>
            <div class="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
                <img src="../../public/mobile.png" />

            </div>
        </div>

     </div>

</template>